---
id: quickstart
title: "Quickstart"
description: This quickstart guide provides a basic understanding of the Lagrange State Committee.
---

## Overview
The Lagrange State Committee (LSC) network is a simple and efficient ZK light client protocol for optimistic rollups (ORUs) that settle on Ethereum, such as Optimism, Base, and now Arbitrum. Similar to Ethereum’s Sync Committee, LSCs support light client-based applications like bridges and interchain message layers, enabling them to use an optimistic rollup’s state without excessive trust assumptions. 

## Why Lagrange State Committee?

- **Efficient Cross-chain State Access** - LSCs offer a significant benefit to developers by reducing the latency of sending cross-chain messages from optimistic rollups. Each individual state committee acts as a “fast-mode” for bridges and messaging protocols by accelerating attestations to finality and removing the need to wait out the challenge window.
- **Robust Security, Less Overhead -** Integrating with LSCs enables developers to achieve robust security for their cross-chain interoperability use cases with less overhead. By tapping into LSC’s shared security zone, developers can instead shift their resources to optimizing their product features instead of managing the connection to each rollup they support.
- **More Expressive Cross-Chain DApps -** Lagrange State Committees enable any arbitrary cross-chain protocol to integrate with a single hub of shared cross-chain security that can dynamically scale in size based on demand

## Key Components 

The key components of the Lagrange State Committee protocol are the Sequencer, Database, gRPC Server, Consensus, and Attestation nodes.

The Lagrange State Committee (LSC) is powered by the ZK Prover Network, which is the base layer that is used to generate ZK proofs with features such as favorable cost structure and granular proving marketplace. 

Learn more about the LSC Architecture [here](./architecture/architecture-overview.mdx).

## Inductive State Proofs

This inductive process allows contracts to prove the validity of any batch through zero-knowledge proofs and aggregated BLS signatures of the committee.  For a batch’s state proof to be valid, at least two-thirds of the committee must sign the batch header. Explore Inductive state proofs in detail [here](./inductive-state-proofs.md). 


## Use-cases

- Cross-chain Bridging
- Cross-chain Messaging
- Indexing Protocols

## Operator Guide

This guide provides a brief overview about the information needed to configure and run an attestation node on testnet and mainnet network using the CLI.

- [Supported Chains](./operator-guide/supported-chains.md)
- [System Requirements](./operator-guide/system-requirements.md)
- Running Attestation nodes with CLI
- [Contract Addresses](./operator-guide/contract-addresses.md)

## Learn More

- [How does Slashing work?](./slashing.md)
- FAQs
- [Research Papers](https://hackmd.io/@lagrange/lagrange-committee)
- [Technical Talks](https://www.youtube.com/@lagrangedev/videos)
- [Articles](https://lagrange.dev/blog)

## Considerations

When implementing State Committee Architecture, consider the following:

- LSC is based on the Lagrange ZK Prover Network

## Next Steps

Congratulations, you've finished the quickstart! Head over to our architecture section to take a deep dive into how the Lagrange State Committee works.