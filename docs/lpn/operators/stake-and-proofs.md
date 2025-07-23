---
id: stake-and-proofs
title: "Stake and Proofs"
description: "Understanding the relationship between operator stake and proof generation obligations in the Lagrange ZK Prover Network"
---

The Lagrange ZK Prover Network operates on a stake-based security model where operators must maintain adequate stake to guarantee reliable proof generation. This economic mechanism ensures network liveness and creates strong incentives for operators to fulfill their computational commitments promptly and accurately.

## Stake as a Liveness Guarantee

In the Lagrange Network, operator stake serves as a fundamental guarantee of service availability and reliability. When an operator receives a proof generation task, their stake acts as collateral ensuring they will deliver a valid proof within the specified timeframe. This mechanism is crucial because client applications depend on timely proof generation to maintain their own service levels and user experience.

The network's ability to generate proofs quickly and reliably is paramount to its success. Users submitting queries expect consistent performance, and any delays or failures in proof generation can cascade through dependent applications. By requiring operators to stake tokens, the network creates economic incentives that align operator behavior with network performance requirements.

## Active Stake Management

When an operator accepts a proof generation task, they effectively "bind" a portion of their stake to guarantee completion of that specific task. This bound stake is considered "active" for the duration of the task and represents the operator's commitment to deliver the proof within the allotted time. The active stake mechanism prevents operators from accepting more work than they can reliably complete.

Operators can accept multiple tasks simultaneously, provided their total active stake does not exceed their total delegated stake on the Lagrange Network. This constraint ensures that operators maintain sufficient economic incentive to complete all accepted tasks.

## Operational Flexibility and Scaling

The network provides operators with significant flexibility in managing their proving infrastructure. Operators are responsible for managing their fleet of provers and determining the optimal configuration for their hardware resources. This includes decisions about prover types, capacity allocation, and scaling strategies based on market demand and profitability considerations.

Given the current early phase of the project, operators are encouraged to begin with simpler prover configurations and gradually scale their operations as they gain experience and the network matures. This approach allows operators to understand the operational requirements, optimize their infrastructure, and build expertise before making larger capital investments in more sophisticated proving hardware.

and guidance will be provided to help operators optimize their configurations and maximize their contribution to network security and performance.
