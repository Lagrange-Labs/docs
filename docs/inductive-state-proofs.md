---
id: inductive-state-proofs
title: "Inductive State Proofs"
description: An overview of generation indcutive state proofs for the blocks attested by State Committee
author: kashish
---

## Proof Generation

Lagrange Committees are responsible for signing new block headers from the arbitrary chain that they are attesting to. Signatures are executed by each node using their BLS key pair from the restaked chain that handles slashing. Along with the block header, each Lagrange Node also signs a digest of the current_committee for a given block and the next next_committee for the subsequent block.

For a state proof of a single block to be valid, the following recursive properties must hold:

1. At least 2/3 voting power out of the total committee voting power for a given block b must have signed the block header. The public keys of these nodes are stored in the current_committee Merkle tree.

2. The current_committee of block b equals the next_committee tree of block b-1.

3. Block b-1 is either the genesis block or is valid with respect to these three conditions.

This recursive relationship allows any block to be proven as valid via an inductive proof, starting with the base case of an initial hardcoded genesis attestor set. To prove an arbitrary block, a contract requires an inductive zero-knowledge proof of the validity of the previous block with respect to genesis and an aggregated BLS signature of the current_commitee of the present block:

```
struct block {
        var block_header,
        var current_committee,
        var next_committee,
}

struct block_attestation {
        var block,
        var signer_public_keys
        var bls_signature,
        var previous
}

def inductive_state_proof (block_attestation, genesis):

    verify_bls(block_attestation.block, block_attestation.bls_signature,
                        block_attestation.signer_public_keys)

    for attestor_key in block_attestation.signer_public_keys:
            verify_inclusion(attestor_key, block_attestation.block.current_committee)

    require(3 * block_attestation.signer_public_keys.length >= 2 *
                    block_attestation.block.current_committee.length)

    require(block_attestation.previous.block.next_committee ==
                    block_attestation.block.current_committee)

    if block_attestation == genesis:
            return true

    else:
            inductive_state_proof(block_attestation.previous, genesis)
```
