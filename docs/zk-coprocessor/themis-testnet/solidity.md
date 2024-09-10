---
id: solidity
title: "Solidity Documentation"
description: Solidity Documentation for developers to run queries on Themis Testnet
---

## Proving ERC721Enumerable NFT ownership

The goal of Testnet Themis is to run computations on historical values of a given mapping in a smart contract. Initially, we focus on proving historical values of mappings with “simple” keys and values (where “simple” means native type).

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
    LPNRegistryV1 registry =
        LPNRegistryV1(0x2584665Beff871534118aAbAE781BC267Af142f9);

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

For Testnet Themis, we will support only a very limited set of computations. Specifically, we focus on computing SELECT statements over historical data.

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
abstract contract LPNClientV1 is ILPNClientV1 {
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

import {LPNClientV1} from "./LPNClientV1.sol";
import {ILPNRegistryV1} from "../interfaces/ILPNRegistryV1.sol";
import {QueryOutput} from "../Groth16VerifierExtensions.sol";
import {Initializable} from
    "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/**
 * @title LPNQueryV1
 * @dev A contract for submitting queries to the Lagrange ZK Coprocessor 1.0
 */
contract LPNQueryV1 is LPNClientV1, Initializable {
    /**
     * @dev Struct to store metadata about a query request.
     * @param sender The address that sent the query request.
     * @param queryHash The hash of the query sent. Uniquely identifies a query over a particular table.
     * @param placeholders An array of placeholder values for the query.
     */
    struct RequestMetadata {
        address sender;
        bytes32 queryHash;
        bytes32[] placeholders;
    }

    /**
     * @dev Mapping to store request metadata by request ID.
     */
    mapping(uint256 requestId => RequestMetadata request) public requests;

    /**
     * @dev Event emitted when a query request is made.
     * @param sender The address that sent the query request.
     * @param queryHash The hash of the query being made.
     * @param placeholders An array of placeholder values for the query.
     */
    event Query(
        address indexed sender,
        bytes32 indexed queryHash,
        bytes32[] placeholders
    );

    /**
     * @dev Event emitted when the result of a query is received.
     * @param requestId The ID of the query request.
     * @param sender The address that sent the query request.
     * @param result The output of the query.
     */
    event Result(
        uint256 indexed requestId, address indexed sender, QueryOutput result
    );

    /**
     * @dev Initializer for the LPNQueryV1 contract.
     * @param _lpnRegistry The address of the LPN registry contract.
     */
    function initialize(ILPNRegistryV1 _lpnRegistry) external initializer {
        LPNClientV1._initialize(_lpnRegistry);
    }

    /**
     * @dev Function to submit a query to the Lagrange ZK Coprocessor.
     * @param queryHash The hash of the query to be executed.
     * @param placeholders An array of placeholder values for the query.
     * @param startBlock The starting block number for the query range.
     * @param endBlock The ending block number for the query range.
     */
    function query(
        bytes32 queryHash,
        bytes32[] calldata placeholders,
        uint256 startBlock,
        uint256 endBlock
    ) external payable {
        uint256 requestId = lpnRegistry.request{value: lpnRegistry.gasFee()}(
            queryHash, placeholders, startBlock, endBlock
        );

        requests[requestId] = RequestMetadata({
            sender: msg.sender,
            queryHash: queryHash,
            placeholders: placeholders
        });

        emit Query(msg.sender, queryHash, placeholders);
    }

    /**
     * @dev Internal function called by LPNClientV1 to provide the result of a query.
     * @param requestId The ID of the query request.
     * @param result The output of the query.
     */
    function processCallback(uint256 requestId, QueryOutput memory result)
        internal
        override
    {
        RequestMetadata memory req = requests[requestId];
        emit Result(requestId, req.sender, result);
        delete requests[requestId];
    }
}
```
