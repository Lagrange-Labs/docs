---
id: quickstart
title: "Writing a smart contract that queries historical storage from the Lagrange ZK Coprocessor"
description: Quickstart guide to get you started with ZK Coprocessor
---

Welcome to the Quickstart!

## Overview

In this quick start, we will walk you through registering a calling a query onchain. We’ll leverage the Lagrange Coprocessor, which allows us to efficiently query data using SQL. The Lagrange Coprocessor also ensures the accuracy of these queries by generating cryptographic proofs that are verified onchain.

### Why Lagrange ZK Coprocessor?

The Lagrange Coprocessor is a powerful tool for working with blockchain data, especially when you need to ensure the correctness of your data queries. It allows you to:

•	**Query Data with SQL**: Easily write and run SQL queries to retrieve specific price data from the Azuki collection.

•	**Proof Generation**: Automatically generate a cryptographic proof with each query, ensuring that the data you receive is accurate and tamper-proof.

This approach reduces complexity significantly by obviating the need for Merkle Proofs or trusted Oracles. This example is a zero-to-hero example of how the ZK Coprocessor works under the hood, showing a summary of what is possible on the Lagrange ZK Coprocessor. 

## Prerequisites

- Familiarity with the command line
- Basic understanding of blockchain concepts
- Have some knowledge of solidity and its concepts

## Step 1: Setting Up Your Environment

Let’s create a new smart contract repo with [Foundry](https://github.com/foundry-rs/foundry).

```bash
mkdir zk-coprocessor-example
cd zk-coprocessor-example
forge init
```

This will create a new git repo called `zk-coprocessor-example`.

Next let’s install dependencies for the project.

```bash
forge install lagrange-labs/lagrange-lpn-contracts
```
Then let’s make sure everything compiles.

```bash
forge build
```
And that’s it! We have a smart contract repo with the Lagrange ZK Coprocessor SDK installed.

Now, we need to choose a pre-existing or register a new table to query.

## Step 2: Registering a Table

Permission to begin table registration is going to come up soon via our UI prompt. To complete this step, you have to fill a [form](https://docs.google.com/forms/d/e/1FAIpQLScg11zjGKiHrxlzT8fTUDtQmzpI2OFIHtlrSKVFnvvQV_XnJA/viewform). 

This step allows you to register the relevant contract that you'd like Lagrange to index. After a contract is indexed, one can register and execute SQL queries on the historical data of this contract.

## Step 3: Registering a Query

In this step, we will go through the process of registering and executing queries.

Visit the [dashboard](https://app.lagrange.dev/zk-coprocessor/register-query) to register a query.

![register](/img/register-query.png) 

<ThemedImage
  lightSrc="/img/register-query.png"
  darkSrc="/img/register-query.png"
  alt="Register Query"
/>

The result is a 'query hash' that we will be using to execute our query in our smart contract. 

## Step 4: Writing your contract

You can use the below snippet to get started. Look for the `**MODIFY ME**` comments to see what you will need to update and implement.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {LPNClientV1} from "lagrange-lpn-contracts/src/v1/client/LPNClientV1.sol";
import {ILPNRegistryV1} from
    "lagrange-lpn-contracts/src/v1/interfaces/ILPNRegistryV1.sol";
import {L1BlockNumber} from "lagrange-lpn-contracts/src/utils/L1Block.sol";
import {QueryOutput} from
    "lagrange-lpn-contracts/src/v1/Groth16VerifierExtensions.sol";

contract YourContract is LPNClientV1 {
    // **MODIFY ME**
    // Include the query hash obtained from registering your query
    // This can be a constant, a storage variable, or passed in via calldata
    bytes32 public constant YOUR_QUERY_HASH =
        0x1231231231231231231231231231231231231231231231231231231231231231

    // **MODIFY ME**
    // This is a struct that represents the structure of one or more rows you expect to receive as the result of your query.
    // Each field in the struct represents a column in the resulting rows of your query.
    // Keep in mind that the order of the struct fields should exactly match the expected order of the columns.
    struct YourExpectedRow {
        uint256 someColumnName;
    }


    // **MODIFY ME**
    // You can use this mapping to include any values known at request time are useful for implementing
    // the callback logic.
    mapping(uint256 requestId => bool contextForCallback) public requests;

    constructor(ILPNRegistryV1 lpnRegistry_) {
        LPNClientV1._initialize(lpnRegistry_);
    }

    function query() external {
        // **MODIFY ME**
        // In this case, we assume a query with one placeholder `$1` where the value is some address.
        // Modify this to match your query.
        bytes32[] memory placeholders = new bytes32[](1);
        placeholders[0] = bytes32(bytes20(msg.sender));

        uint256 requestId = lpnRegistry.request{value: lpnRegistry.gasFee()}(
            YOUR_QUERY_HASH, placeholders, L1BlockNumber(), L1BlockNumber()
        );

        // **MODIFY ME**
        // Update this with relevant context to be used in the `processCallback` function
        requests[requestId] = true;
    }

    function processCallback(uint256 requestId, QueryOutput memory result)
        internal
        override
    {
        bool context = requests[requestId];

        uint256 someResult;
        for (uint256 i = 0; i < result.rows.length; i++) {
            YourExpectedRow memory row =
                abi.decode(result.rows[i], (YourExpectedRow));

            // **MODIFY ME**
            // Do something with the values in your result
            if (context) {
                someResult = row.someColumnName + 1;
            }
        }

        delete requests[requestId];
    }
}
```

<!-- ## Step 5: Deploy your contract -->
<!---->
<!-- In this step, you will learn how to compile and deploy your smart contract that makes a query request to the ZK Coprocessor. -->
<!---->
<!-- :::info -->
<!-- 1. Before you start, make sure that you’ve configured the Holesky Testnet in your wallet. -->
<!-- 2. Have some [Holesky Testnet ETH](https://cloud.google.com/application/web3/faucet/ethereum/holesky). If you need more, use one of the faucets. -->
<!-- ::: -->
<!---->
<!-- Congratulations, you have now successfully deployed a smart contract that queries historical onchain data using Lagrange's ZK Coprocessor. -->

:::info
## Takeaways

- **Provable Queries**: With ZK Coprocessor the queries generated can be efficiently verified onchain
- **Cross-chains**: The ZK Coprocessor can process smart contract's storage on any EVM based chains and answer queries for these contract on another chain, without the need to use bridges.

## Next steps

- Continue learning by [querying the Pudgy Penguins contract from L2](./themis-testnet/example-pudgy-penguins.md)
- Join the Lagrange **Developer Community in [Discord](https://discord.com/invite/lagrange)** where you can ask any questions about this tutorial in the channel
- Tag us on [X](https://x.com/lagrangedev) to help other devs building on Lagrange ZK Coprocessor or share your project.
:::
