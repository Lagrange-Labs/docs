---
id: azuki-lending-quickstart
title: "Building a Lending Application with Azuki Price Data and Lagrange ZK Coprocessor"
description: Quickstart guide to get you started with ZK Coprocessor
---

Welcome to the Quickstart!

## Overview

In this quick start, we will walk you through building a lending application that utilizes price data from the [Azuki NFT collection](https://opensea.io/collection/azuki). We’ll leverage the Lagrange Coprocessor, which allows us to efficiently query this data using SQL. The Lagrange Coprocessor also ensures the accuracy of these queries by generating cryptographic proofs.

### Why Lagrange ZK Coprocessor?

The Lagrange Coprocessor is a powerful tool for working with blockchain data, especially when you need to ensure the correctness of your data queries. It allows you to:

•	**Query Data with SQL**: Easily write and run SQL queries to retrieve specific price data from the Azuki collection.

•	**Proof Generation**: Automatically generate a cryptographic proof with each query, ensuring that the data you receive is accurate and tamper-proof.

This approach reduces complexity significantly by obviating the need for Merkle Proofs or trusted Oracles. This example is a zero-to-hero example of how the ZK Coprocessor works under the hood, showing a summary of what is possible on the Lagrange ZK Coprocessor. 

## Prerequisites

- Prior knowledge of javascript
- Familiarity with the command line
- Basic understanding of blockchain concepts
- Have some knowledge of solidity and its concepts

## Step 1: Setting Up Your Environment

Let’s clone an example dapp we have built.

```bash
git clone https://github.com/lagrange-labs/lending-app-example.git
```

This will create a new directory called `lending-app-example`.

Next let’s install dependencies for the project.

```bash
cd lending-app-example
npm i
```
Then let’s run the dapp.

```bash
npm start
```
And that’s it! We have a dapp up and running which shows the intialisation flow

## Step 2: Registering a Table

Permission to begin table registration is going to come up soon via our UI prompt. To complete this step, you have to fill a [form](https://docs.google.com/forms/d/e/1FAIpQLScg11zjGKiHrxlzT8fTUDtQmzpI2OFIHtlrSKVFnvvQV_XnJA/viewform). 

This step allows you to register the relevant contract that you'd like Lagrange to index. After a contract is indexed, one can register and execute SQL queries on the historical data of this contract. 

## Step 3: Registering a Query

In this step, we will go through the process of registering and excecuting queries to retrieve price data of a specific block in the Azuki NFT contract. 

Visit the [dashboard](https://staging-zkmr-dashboard.lagrange.dev/dashboard/) to register a query.

![reister](/img/register-query.png) 

<ThemedImage
  lightSrc="/img/register-query.png"
  darkSrc="/img/register-query.png"
  alt="Register Query"
/>

The result is a 'query hash' that we will be using to execute our lending smart contract. 

## Step 4: Deploy your application

In this step, you will learn how to compile and deploy your lending smart contract that utilizes price data from the Azuki NFT collection. 

:::info
1. Before you start, make sure that you’ve configured the Holesky Testnet in your wallet.
2. Have some [Holesky Testnet ETH](https://cloud.google.com/application/web3/faucet/ethereum/holesky). If you need more, use one of the faucets.
:::


Congratulations, you have now successfully built a Lending Application with Azuki Price Data and Lagrange Coprocessor. 

:::info
## Takeaways

- **Provable Queries**: With ZK Coprocessor the queries generated can be efficiently verified off-chain
- **Cross-chains**: The ZK Coprocessor can process smart contract's storage on any EVM based chains and answer queries for these contract on another chain, without the need to use bridges.

## Next steps

- Continue learning by going to the hello-world dapp tutorial
- Join the Lagrange **Developer Community in [Discord](https://discord.com/invite/lagrange)** where you can ask any questions about this tutorial in the channel
- Tag us on [X](https://x.com/lagrangedev) to help other devs building on Lagrange ZK Coprocessor or share your project.
:::
