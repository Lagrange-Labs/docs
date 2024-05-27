---
id: slashing
title: "Slashing Conditions"
description: Slashing conditions for State Committee operators
author: kashish
---

If a cross-chain state attestor executes a signature on an incorrect header or state committee root for a given block, other network actors must be able to trigger slashing of that node’s collateral. For slashing to occur in a trustless fashion, there must be a deterministic set of conditions under which a signature can be considered incorrect. Verifying the object that a node signed with its BLS key is trivial to do on-chain with a cost of ~110,000 gas.

To prove that a node attested to an incorrect committee root, a proof must show that the root signed by a given node incorrectly includes or excludes a specific public key. As committees are stored in contracts on Ethereum, the required leaf nodes can easily be referenced on-chain as part of proving inclusion or exclusion within a committee root for slashing.

Proving that a signature on a given block header is invalid requires that a correct block header can be settled on Ethereum in a trust minimized manner. As settlement on Ethereum is only required in the event of slashing, slow forms can be used without compromising the time required for proof generation.

The following forms of state settlement can be used as a source of truth to trigger trust minimized slashing on Ethereum:

**Arbitrum & Base, Optimism**: A finalized roll-up block that has cleared the fraud proof window on Ethereum.
