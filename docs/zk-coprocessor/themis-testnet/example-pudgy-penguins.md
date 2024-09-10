---
id: example-pudgy-penguins
title: "Example: NFT Mint Whitelist on L2 with Pudgy Penguins"
description: Steps to implement NFT mint whitelist on L2s using the Pedgy Penguins contract from Ethereum
---

Implement an NFT mint whitelist on L2s like Base and Fraxtal using the Pudgy Penguins contract from Ethereum.

## Introduction

Welcome to our step-by-step guide on how to implement one of the many use cases of Lagrange's ZK Coprocessor: a whitelisting mechanism for minting NFTs on L2s using verifiable queries of Pudgy Penguins holders on Ethereum.

This guide will cover the L2 -> L1 `SELECT` query capability of Testnet Themis for the ZK Coprocessor.

We will leverage L2s' cheap transactions and Ethereum's rich state to enable Pudgy Penguins holders to mint a new NFT collection, Layered Penguins. Our ZK Coprocessor gives you a powerful tool to simplify the whitelisting process, which traditionally involves trusted, off-chain logic like Merkle proofs.

## Prerequisites

To follow this tutorial, you should have:

1. A basic understanding of Solidity and smart contract development.

2. Familiarity with Ethereum and the [ERC721 standard](https://eips.ethereum.org/EIPS/eip-721).

3. A local repo setup with [Foundry](https://github.com/foundry-rs/foundry).

4. Installation of the [ZK Coprocessor Solidity SDK](https://github.com/lagrange-labs/lagrange-lpn-contracts).

## High Level Concept

The ZK Coprocessor enables you to leverage the state of Ethereum's mainnet (Layer 1) to verify ownership of NFTs while executing transactions on a faster and cheaper Layer 2, like Fraxtal or Base. This approach reduces complexity significantly by obviating the need for Merkle Proofs or trusted Oracles.

## Detailed Walkthrough

### Contract Explanation

The `LayeredPenguins` contract integrates with the `LPNRegistryV1` contract on supported L2s to submit a query to the zkMapReduce proving network to check ownership of Pudgy Penguins NFTs before minting. It implements `LPNClientV1` to receive the verified query result and subsequently mint the user a LayeredPenguin NFT.

The `SELECT_PUDGY_PENGUINS_QUERY_HASH` comes from the query registration phase on the UI dashboard after successfully submitting your query. The process generates a unique query hash necessary for the contract.

```solidity
   bytes32 public constant SELECT_PUDGY_PENGUINS_QUERY_HASH =
        0xb4ae7462039ec325e1fc805a91fb35c9505f350e609d4d53e1c6e4f3dbfe8997;
```

### Key Functions

`requestMint()`

This payable function allows users to initiate a mint request. It calls `queryPudgyPenguins()` to check if the caller owns a Pudgy Penguin NFT and records the user's address so we can mint an NFT for them in the callback. The user must pay `0.00015 ETH` to cover the gas fee of onchain proof verification + the execution of the `processCallback` function.

```solidity
function requestMint() external payable {
    uint256 requestId = queryPudgyPenguins();
    mintRequests[requestId] = MintRequest({sender: msg.sender});
}
```

`queryPudgyPenguins()`

This function initiates the query of the Pudgy Penguins contract by calling `LPNRegistryV1.request()` to verify ownership based on the user's address. It queries the most recent block on Ethereum, which is provided by an [OP Stack precompile](https://github.com/ethereum-optimism/optimism/blob/develop/packages/contracts-bedrock/src/L2/L1Block.sol#L18).

```solidity
function queryPudgyPenguins() private returns (uint256) {
        bytes32[] memory placeholders = new bytes32[](1);
        placeholders[0] = bytes32(bytes20(msg.sender));

        return lpnRegistry.request{value: lpnRegistry.gasFee()}(
            SELECT_PUDGY_PENGUINS_QUERY_HASH,
            placeholders,
            L1BlockNumber(),
            L1BlockNumber()
        );
    }
```

`processCallback()`

Upon receiving the callback, this function checks if the query result contains 1 or more Pudgy Penguin token ids. If true, it mints a LayeredPenguin NFT to the user's wallet.

```solidity
 function processCallback(uint256 requestId, QueryOutput memory result)
        internal
        override
    {
        MintRequest memory req = mintRequests[requestId];

        for (uint256 i = 0; i < result.rows.length; i++) {
            Row memory row = abi.decode(result.rows[i], (Row));

            if (ownerOf(row.tokenId) == address(0)) {
                _mint(req.sender, row.tokenId);
            }
        }

        delete mintRequests[requestId];
    }
```

### Integration Points

Integrate the `LayeredPenguins` contract into your application by:

1. Deploying the contract to Base.

2. Calling the `requestMint()` function from your frontend

### Setup Instructions

Deploying and setting up the contract involves several steps:

1. Compile the `LayeredPenguins` contract with `forge build`

2. Deploy to OP Stack L2s with `forge script`

3. Configure the contract address in your dApp to interact with `LayeredPenguins`

### Security Considerations

**Important:** The zkMapReduce codebase is unaudited and is currently an alpha release. It is meant for experimentation purposes. Use it at your own risk.

## Full Code Example

See other examples and source code in our [GitHub repo](https://github.com/lagrange-labs/lagrange-lpn-contracts).

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {LPNClientV1} from "lagrange-lpn-contracts/src/v1/client/LPNClientV1.sol";
import {ILPNRegistryV1} from "lagrange-lpn-contracts/src/v1/interfaces/ILPNRegistryV1.sol";
import {
    ERC721Enumerable,
    ERC721
} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {L1BlockNumber} from "lagrange-lpn-contracts/src/utils/L1Block.sol";
import {QueryOutput} from "lagrange-lpn-contracts/src/v1/Groth16VerifierExtensions.sol";

/// @notice Refer to docs page https://lagrange-labs.gitbook.io/lagrange-v2-1/zk-coprocessor/testnet-euclid-developer-docs/example-nft-mint-whitelist-on-l2-with-pudgy-penguins
contract LayeredPenguins is LPNClientV1, ERC721Enumerable {
    /// SELECT AVG(key) FROM pudgy_penguins_owners WHERE value = $1;
    bytes32 public constant SELECT_PUDGY_PENGUINS_QUERY_HASH =
        0xb4ae7462039ec325e1fc805a91fb35c9505f350e609d4d53e1c6e4f3dbfe8997;
    string public constant PUDGY_METADATA_URI =
        "ipfs://bafybeibc5sgo2plmjkq2tzmhrn54bk3crhnc23zd2msg4ea7a4pxrkgfna/";

    struct MintRequest {
        address sender;
    }

    struct Row {
        uint256 tokenId;
    }

    mapping(uint256 requestId => MintRequest request) public mintRequests;

    constructor(ILPNRegistryV1 lpnRegistry_)
        ERC721("Layered Penguins", "LPDGY")
    {
        LPNClientV1._initialize(lpnRegistry_);
    }

    function _baseURI() internal pure override returns (string memory) {
        return PUDGY_METADATA_URI;
    }

    function requestMint() external payable {
        uint256 requestId = queryPudgyPenguins();
        mintRequests[requestId] = MintRequest({sender: msg.sender});
    }

    function queryPudgyPenguins() private returns (uint256) {
        bytes32[] memory placeholders = new bytes32[](1);
        placeholders[0] = bytes32(bytes20(msg.sender));

        return lpnRegistry.request{value: lpnRegistry.gasFee()}(
            SELECT_PUDGY_PENGUINS_QUERY_HASH,
            placeholders,
            L1BlockNumber(),
            L1BlockNumber()
        );
    }

    function processCallback(uint256 requestId, QueryOutput memory result)
        internal
        override
    {
        MintRequest memory req = mintRequests[requestId];

        for (uint256 i = 0; i < result.rows.length; i++) {
            Row memory row = abi.decode(result.rows[i], (Row));

            if (ownerOf(row.tokenId) == address(0)) {
                _mint(req.sender, row.tokenId);
            }
        }

        delete mintRequests[requestId];
    }
}
```

Congratulations! You've successfully implemented an NFT mint whitelist on L2s like Base and Fraxtal using the Pudgy Penguins contract from Ethereum.    
