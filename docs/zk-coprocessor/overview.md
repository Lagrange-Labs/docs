---
id: overview
title: "Overview of ZK Coprocessor and Verifiable Database"
description: Introduction to ZK Coprocessor
---

The Lagrange ZK Coprocessor and Verifiable Database goal can be stated in simple terms:

> Create a provable database containing a subset of the original blockchain data, which can be efficiently be queried over.

This is very similar to the notion of “coprocessor”, allowing smart contracts to run intensive computations off-chain that can be efficiently be verified on-chain.

To achieve this goal, the Coprocessor works in two phases:

1. **Preprocessing** or indexing the contract’s storage at each block and provably “inserting” the data into a Verifiable Database, which supports efficient provable queries. This part is the most computationally intensive part of the process due to most blockchain's data structures not being “proof friendly”.

2. **Run provable queries** in parallel over this new database when smart contract asks it. This computation is done in the spirit of MapReduce, as found in large scale database processing tools.

The ZK Coprocessor can generate a proof of correct computation over arbitrary storage slots for arbitrary block ranges. For example, consider an application that wishes to compute the average on Ethereum for ETH / USDC pricing. A developer must first specify the memory slots and block range (~50,400) that they are interested in including in the data set. Next the developer writes the computations that is to be executed across the storage slots over the different blocks in parallel. Once the proof is generated, it will prove both the storage inclusion and the aggregated computation as valid with respect to a block header derived from smart contract information.

**Cross-chains**: The ZK Coprocessor can process smart contract's storage on any EVM based chains and answer queries for these contract on another chain, without the need to use bridges. To extend the previous example, a developer on Eth might want to compute the average of a specific pair on different L2s at the same time and get the result on the Eth contract.

The next two sections go into more details on the two

- The creation of the Verifiable Database

- The distributed computation in the fashion of MapReduce framework that provides a proof of the correct execution of the computation.
