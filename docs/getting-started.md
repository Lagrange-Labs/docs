---
id: getting-started
title: "Getting Started"
description: Introduction to Lagrange State Committees
author: kashish
content_type: introduction
---

Lagrange State Committees provide a mechanism for generating succinct zero-knowledge state proofs for optimistic rollups based on the use of either staked or restaked collateral. Each state committee is made up of a group of operators running nodes, that have either staked an optimistic rollup’s native token or dual-staked with EigenLayer. Each node attests to the execution and finality of transaction batches submitted by optimistic sequencers to Ethereum.

Whenever a batch consisting of rollup blocks is considered either safe (OP stack) or has had its corresponding transaction batch settled on Ethereum (Mainnet), each node is required to attest to the batch of blocks using its BLS key.
Broadly, each signature is executed on a tuple containing 3 essential elements:

```
struct batch {
    var batch_header,
    var current_committee,
    var next_committee
}
```
