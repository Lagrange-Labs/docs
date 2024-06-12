---
id: solidity
title: "Solidity Documentation"
description: Solidity Documentation for developers to run queries on Euclid Testnet
---

## Proving ERC721Enumerable NFT ownership

The goal of Testnet Euclid is to run computations on historical values of a given mapping in a smart contract. Initially, we focus on proving historical values of mappings with “simple” keys and values (where “simple” means native type).

In particular, we focus on processing the following key-values pairs in the [ERC721Enumerable contract](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol#L28):

```solidity
mapping(uint256 tokenId => address owner) private _owners;
```

## Technical Note:

The reason the ZK Coprocessor requires ERC721Enumerable instead of the first ERC721, is that since we are not proving the entirety of the storage trie, then our proofs need to show that the subset it is processing belongs to this mapping. Natively exposing the full list as public inputs is impossible, thus we require to have a separate variable keeping track of the count of such entries in the mapping.

ERC721Enumerable naturally provides that count via keeping track of [all NFT ids minted](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol#L21) so far.

## Installing Dependencies

You can install our [Solidity SDK](https://github.com/Lagrange-Labs/lagrange-lpn-contracts) via [foundry](https://github.com/foundry-rs/foundry)

```solidity
forge install lagrange-labs/lagrange-lpn-contracts@euclid-base-v0.1
forge remappings > remappings.txt
```

## Registering to Lagrange for Indexing Storage

The contract needs to tell Lagrange to start indexing / proving the mapping he wants. Lagrange holds some sets of smart contracts that are publicly accessible and callable for indexing and querying.

The developer knows the layout of its contract and can directly indicates this to Lagrange contracts. You can use `solc` to determine the storage slots of the mapping and size variables:

```solidity
solc --storage-layout MyContract.sol -o MyContract.json
```

You can use the storage slot values in the call to `register` below:

```solidity
 // this call may revert for reasons internal to Lagrange:
 //  * not supported, client contract not whitelisted etc
 // First argument is the mapping slot in the contract,
 // in this case 0. Second is the slot of the variable
 // that keeps track of the total number of entries in
 // the mapping.
function lpnRegister(address storageContract) external {
    LPNRegistryV0 registry =
        LPNRegistryV0(0x2584665Beff871534118aAbAE781BC267Af142f9);

    // Registration is currently supported for whitelisted storage contracts on Ethereum
    if (isEthereum()) {
        if (!registry.whitelist(storageContract)) {
            registry.toggleWhitelist(storageContract);
        }
        registry.register(
            storageContract, OWNERS_STORAGE_SLOT, OWNERS_SIZE_SLOT
        );
    }
}
```

## Querying the database

Once Lagrange is indexing the requested storage slots, the smart contract can start doing queries over the verifiable databases that are created.

For Testnet Euclid, we will support only a very limited set of computations. Specifically, we focus on computing SELECT statements over historical data.

```solidity
function queryHolder(
    address storageContract,
    address holder,
    uint256 startBlock,
    uint256 endBlock,
    uint256 offset
) external payable {
    uint256 requestId = lpnRegistry.request{value: lpnRegistry.gasFee()}(
        storageContract,
        bytes32(uint256(uint160(holder))),
        startBlock,
        endBlock,
        offset
    );

    // We can store the requestID if we need to access other data in the callback
    requests[requestId] = RequestMetadata({sender: msg.sender, holder: holder});
}
```

## Receiving the result

The dapp contract should satisfy an interface to receive the reply:

```solidity
abstract contract LPNClientV0 is ILPNClient {
    /// @notice Callback function called by the LPNRegistry contract.
    /// @param requestId The ID of the request.
    /// @param results The result of the request.
    function processCallback(uint256 requestId, uint256[] calldata results)
        internal
        virtual;
}
```

Refer to the below code snippet for a complete sample implementation of a zkMapReduce client:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {LPNClientV0} from "lagrange-lpn-contracts/client/LPNClientV0.sol";
import {ILPNRegistry} from "lagrange-lpn-contracts/interfaces/ILPNRegistry.sol";

/**
 * @title LPNQueryV0
 * @dev A contract for querying NFT ownership using the Lagrange Euclid testnet.
 */
contract LPNQueryV0 is LPNClientV0 {
    /**
     * @dev Struct to store metadata about a query request.
     * @param sender The address that sent the query request.
     * @param holder The address of the NFT holder being queried.
     */
    struct RequestMetadata {
        address sender;
        address holder;
    }

    /**
     * @dev Mapping to store request metadata by request ID.
     */
    mapping(uint256 requestId => RequestMetadata request) public requests;

    /**
     * @dev Event emitted when a query request is made.
     * @param sender The address that sent the query request.
     * @param storageContract The address of the NFT contract being queried.
     */
    event Query(address indexed sender, address indexed storageContract);

    /**
     * @dev Event emitted when the result of a query is received.
     * @param requestId The ID of the query request.
     * @param sender The address that sent the query request.
     * @param holder The address of the NFT holder that was queried.
     * @param results The array of NFT IDs owned by the queried holder.
     */
    event Result(
        uint256 indexed requestId,
        address indexed sender,
        address indexed holder,
        uint256[] results
    );

    /**
     * @dev Constructor to initialize the LPNQueryV0 contract.
     * @param lpnRegistry The address of the LPN registry contract.
     */
    constructor(ILPNRegistry lpnRegistry) LPNClientV0(lpnRegistry) {}

    /**
     * @dev Function to query the NFT IDs of a specific owner over a range of blocks.
     * @param storageContract The address of the NFT contract to query.
     * @param holder The address of the NFT holder to query.
     * @param startBlock The starting block number for the query range.
     * @param endBlock The ending block number for the query range.
     * @param offset The offset for pagination of results.
     */
    function query(
        address storageContract,
        address holder,
        uint256 startBlock,
        uint256 endBlock,
        uint8 offset
    ) external payable {
        uint256 requestId = lpnRegistry.request{value: msg.value}(
            storageContract,
            bytes32(uint256(uint160(holder))),
            startBlock,
            endBlock,
            offset
        );

        requests[requestId] =
            RequestMetadata({sender: msg.sender, holder: holder});

        emit Query(msg.sender, storageContract);
    }

    /**
     * @dev Internal function called by LPNClientV0 to provide the result of a query.
     * @param requestId The ID of the query request.
     * @param results The array of NFT IDs owned by the queried holder.
     */
    function processCallback(uint256 requestId, uint256[] calldata results)
        internal
        override
    {
        RequestMetadata memory req = requests[requestId];
        emit Result(requestId, req.sender, req.holder, results);
        delete requests[requestId];
    }
}
```
