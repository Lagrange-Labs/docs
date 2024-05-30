---
id: zkmr
title: "zkMapReduce (zkMR)"
description: zkMapReduce (zkMR)
---

While there's been a proliferation of popular ZKVMs over the past year with =Nil; Foundation, RiscZero and Polygon Miden, each of them has focused on general purpose sequential execution models. In contrast, Lagrange's ZK MapReduce (ZKMR) is an extension of MapReduce that leverages recursive proofs to prove the correctness of the distributed computation over large amounts of on-chain state data.

This is achieved by generating proofs of computational correctness for each given worker during either the map or reduce steps of a distributed computation job. These proofs can be composed recursively to construct a single proof for the validity of the entire distributed computational workflow. In other words, the proofs of the smaller computations can be combined to create a proof of the entire computation. This allows ZKMR to scale efficiently for complex computations on large data sets that require multiple steps or subcomputations.
