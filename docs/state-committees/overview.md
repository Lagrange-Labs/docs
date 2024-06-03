---
id: overview
title: "Overview"
description: Introduction to Lagrange State Committeess
author: kashish
---

Lagrange Labs' State Committees provides a more secure alternative to isolated k of n bridges for applications that require trustless cross-chain state proofs. The State Committeess are not designed to replace proofs of consensus but instead are an alternative mechanism for chains whose finality or consensus is not provable within a zero-knowledge context. State Committees enables cross-chain bridging, messaging, or indexing protocols to plug into consuming trust-minimized zero-knowledge proofs of cross-chain state, derived from a generalizable light client committee based on rehypothecated collateral.

The security of the Lagrange cross-chain State Committees is derived from an ever growing, dynamically sized set of nodes with leveraged rehypothecated collateral, restaked with EigenLayer.

The Lagrange State Committees is designed to be extensible to generate state proofs for any chain, irrespective of consensus mechanisms, sequencer or validator set specifications.

As such, the collateral behind each attestation can scale dynamically as is required to create secure proofs for each given chain. This property is what enables the Lagrange cross-chain State Committees to be the first protocol to enable generalizable state proofs of any arbitrary chain with super-linear security.
