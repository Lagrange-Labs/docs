---
id: overview
title: "AVS Operators"
description: Overview for ZK Coprocessor AVS operators
---

The Lagrange network is open for operators registered on EigenLayer.

**Role of an operator:** An operator is expected to serve proving requests from Lagrange network by running a "worker" binary. A request is created by the sequencer and contains all the necessary inputs to generate a zkproofs. Overall, a set of proofs are aggregated into a final proof to server a user query.

Currently the proof system used is Plonky2 but a worker is agnostic to the exact semantics and details of what is he proving.
