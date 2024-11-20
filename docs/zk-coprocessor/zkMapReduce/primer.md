---
id: primer
title: "Primer on MapReduce"
description: Primer on MapReduce
---

Lagrange's proving network is built like a distributed MapReduce stack, bringing verifiability of the computation on top. To run computation over a large scale database, there are different architectural choices that one can do. There can be a single server downloading all the data and running the entire computation locally, but that requires to have a very powerful machine and is expensive in terms of bandwidth. Lagrange's network is architectured in the spirit of the famous MapReduce framework, which takes the approach of bringing the computation where the data resides. MapReduce works by running computation on small chunks of the large database, each on a different machine and then have multiple aggregation steps to collide results of different chunks together. Broadly, this computation follows two distinct steps:

1. Each machine performs a map operation on its chunk of data, transforming it into a set of key-value pairs.

2. The results of the shuffle are passed to a reduced operation, which aggregates the two or more outputs of a map operation into a single result. This operation is performed in parallel for many chunks and repeated until a single result is produced.

The main advantage of MapReduce is its scalability. Since the computation is distributed across multiple machines, it can handle large-scale datasets that would be infeasible to process on a single machine. Additionally, the distributed nature of MapReduce allows computation to scale horizontally across more machines, rather than vertically in terms of computation time.
