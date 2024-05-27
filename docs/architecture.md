---
id: architecture
title: "Architecture"
description: A brief description about State Committee architecture
author: kashish
---

import ThemedImage from '@site/src/components/ThemedImage';

## Lagrange Node Requirements

Lagrange Nodes are the attesters within the Lagrange State Committee infrastructure that are responsible for signing the state roots of different chains. Lagrange cross-chain state committees are not designed to replace proofs of consensus but instead are an alternative mechanism for chains whose finality or consensus is not proveable within a zero-knowledge context.

Nodes wishing to join the cross-chain state committee must either restake via EigenLayer or rETH into Lagrange’s Ethereum contracts. A node must provide at least 32 ETH worth of rehypothecated collateral to join the network and must indicate which chain or roll-up they wish to provide attestations for.

<ThemedImage 
  lightSrc="/img/state-committee-light.png" 
  darkSrc="/img/state-committee-dark.png" 
  alt="State Committee Architecture Diagram"
/>

Every node in the network must run a containerized validator or watcher of a relevant chain or roll-up. If multiple restaked Ethereum nodes are operated by the same actor, each node can instead maintain a secure RPC connection to a single instance of that chain’s validator (ideally run locally by the node operator). Once in the network, a node must execute a BLS signature (BN254 curve) on every new block that reaches finality on the chain that they are attesting to.

## Responsibilities of a Cross-Chain State Attester

Each cross-chain state attester is responsible for executing a signature with its BLS12-381 key on every finalized block during the attestation periods that it is active for. Each signature is executed on a tuple containing a block header, a Merkle root of the public keys of the current committee and a Merkle root of the public keys of the next committee.

```
struct block {
    var block_header,
    var current_committee,
    var next_committee,
}
```

The signature executed on the tuple creates slashable conditions for fraud proofs on malicious nodes. Before executing each signature, a cross-chain state committee node must independently check the state of both Ethereum and the attested chain and perform the three basic checks:

1. The block_header is correct and corresponds to a finalized block of the chain that is being attested to.

2. The current_committee Merkle root was correctly derived from the public keys of the attestation set on Ethereum for a given block of the arbitrary chain.

3. The next_committee Merkle root was correctly derived by altering the current_commitee at the end of the attestation period with any nodes who opted to enter or leave the attestation set.
