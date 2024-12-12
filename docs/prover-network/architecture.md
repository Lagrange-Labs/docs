---
id: architecture
title: "ZK Prover Network Architecture"
description: Introduction to Lagrange Prover Network Architecture
---

Traditional, monolithic ZK prover networks rely on single gateway models, which inherently limit scalability with the gateway as the bottleneck. It also acts as a single point of failure for the system: 

![monolithic](/img/monolithic-networks.png) 

By contrast, Lagrange's design is modular, supporting multiple independent subnetworks with dedicated bandwidth that collectively form a “prover network of prover networks”. This approach allows any blockchain, rollup, or application to connect through customizable standards and empowers developers to scale without bottlenecks or I/O constraints. In other words, Lagrange’s ZK Prover Network enables dynamic, infinitely scalable proofs for everything, including large-scale rollup ecosystems.

![lagrange](/img/lagrange-network.png) 

### What Makes Lagrange’s ZK Prover Network Architecture Different

Due to the “network of networks” architecture of Lagrange’s ZK Prover Network, Lagrange is uniquely able to support the sheer scale and complexity of proof generation required for large rollup ecosystems. Here’s how:

1. **Modular Subnetworks:** By employing a modular network of subnetworks, Lagrange allows any chain, rollup, or application to tap into the proving resources it needs—no bottlenecks, no central gatekeeping. Each subnetwork receives dedicated bandwidth and is capable of supporting varied proving demands, ensuring that Lagrange can flexibly power the largest rollup ecosystems.

2. **Customizable Support for Universal Proving:** The Lagrange ZK Prover Network supports heterogeneous and diverse proving needs, both across the whole network and within each subnetwork. This includes support for different proof systems, such as Boojum, Plonky3 or Plonky2, in addition to performant and standardized proof generation. This flexibility ensures that the system can scale based on the needs of the ecosystem, but that provers can also specialize and retain efficiency.

3. **Proof Liveness & Cost Efficiency:** The Lagrange ZK Prover Network currently consists of 85+ of the top institution-grade operators on EigenLayer, who each run multiple provers to support proof generation. Operators commit to producing proofs within a given time period, or risk slashing or non-payment, thus ensuring the liveness of proofs from Lagrange’s Network. Cost efficiency is also guaranteed, due to a combination of using bare-metal instances, economies of scale, and Lagrange’s innovative Double Auction Resource Allocation (DARA) mechanism on the prover marketplace.

4. **Production-Ready Proving:** A core part of working with ZK is handling the many details of managing a distributed proving system. Lagrange’s system abstracts away such complexities by taking care of all of the details and providing a simple and single interface for proof generation requests. By integrating with Lagrange’s ZK Prover Network, Lagrange’s partners can easily outsource  generating the proofs their applications need and spend more time focused on their core business—Lagrange takes care of everything else.
