---
id: efficiency-improvements
title: "Efficiency Improvements of ZKMR"
description: Efficiency Improvements of ZKMR
---

While the ZKMR approach may seem more complicated than traditional sequential computation, its performance scales **horizontally** with respect to the number of parallel machines, rather than **vertically** with respect to time.

The time complexity of proving this MapReduce procedure is O(log(n)) when run with maximum parallelization, as opposed to the sequential execution which has a run-time of O(n).

As we continue to fragment state storage across scalability solutions, such as app chains, app rollups L3s and alt-L1s, the amount of on-chain data being created is only growing and fragmenting exponentially. The question may very soon become, how much data will one have to process to compute a 1-week TWAP across a DEX deployed on 100 different app rollups?

In summary, while sequential computation is highly efficient and expressive for general purpose application development, it is poorly optimized for analysis and processing of large data sets. The efficiency of distributed computing has made it the go to standard for much of the big data processing that has predominated Web2. In a zero-knowledge context, scalability and fault tolerance make it the ideal backbone for handling trustless big data applications, such as complicated on-chain pricing, volatility and liquidity analyses.
