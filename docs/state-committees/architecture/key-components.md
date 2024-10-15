---
id: key-components
title: "Key Components"
description: 
author: daniel
---
# Key Components

## Sequencer

The **Sequencer** is responsible for fetching L2 batch data from L1 (Ethereum), and L2 blocks from EVM rollup chains. It checks different blocks and identifies which ones are part of the batch that should be sequenced. After confirmation, the sequencer updates the committee and the sequenced batches are stored in the database.

The sequencer node is actually a combination of modules with three different functions: Sequencer, Consensus and governance.

At specific intervals, the Sequencer module requests attestations from client nodes to rollup blocks resulting from the execution of a batch of transactions that were written to a DA layer. Instead of executing this routine for every optimistic rollup block, we can do it *once* for each transaction batch that is finalized for a given rollup on a DA layer. This improves the network’s throughput and reduces overhead for both attestation nodes and the sequencer and prover.

## Database

The **Database** stores new finalized batch with aggregate signatures and send non finalized batches to consensus for verification. The finalized batch with aggregate signature is uploaded to the database. 

## Consensus

The **Consensus** is responsible for protocol communication with attestation nodes through the gRPC server. To reach consensus in LSC you need `67%` of the total voting power 

It ensures that all transactions processed by the sequencer are agreed upon by all nodes before being finalized on the Ethereum mainnet.

### The Role of Signature Batches in Consensus

In consensus mechanisms, signature batching plays a pivotal role in efficiently validating agreement among multiple nodes. The gRPC server sends batches to be signed, and validators generate individual signatures, which are then aggregated into a single signature using schemes like BLS. This aggregated signature is sent along with the finalized batch to the consensus layer, significantly reducing computational and network overhead. By verifying the aggregated signature, the consensus layer confirms that a quorum of validators has approved the batch, ensuring fast, secure, and scalable block finalization.

## gRPC Server

The **gRPC Server** is a critical physical component of the architecture, tasked with facilitating communication between attestation nodes. When a batch becomes available, it initiates a round. During this round, the entire batch is proposed to the network, a process referred to as the round state.

This round enables the State Committee to verify the proposed batch through a consensus process. Once 67% of the voting power is amassed for a given round state, this mechanism aggregates all the signatures provided by the operators. These signatures are then attached to the batch, finalizing the verification process.

## Attestation Nodes

**Attestation Nodes**, also referred to as the Client nodes. They are operators in the LSC protocol that participates in aggregate signature generation.

Unlike Ethereum’s capped Sync Committee, Lagrange State Committee (LSC) networks support an unlimited number of nodes, enabling economic security to scale dynamically with the increase in attesting nodes.

The State Committee operates a committee of restaked attestation nodes, where each node verifies the accuracy of Layer 1 (L1) data from Ethereum and proposed batch data from EVM Rollup Chains. The protocol utilizes EigenLayer’s Actively Validated Services (AVS), leveraging Ethereum’s shared security. AVS enables LSC Operators to engage in validation tasks, thus enhancing the network’s security and integrity.

Each operator may manage multiple attestation nodes, with the staked amount determining their voting power. The LSC has introduced an Epoch period, currently set at one week, to ensure that an operator’s voting power remains constant during that period. To verify the committed Boneh–Lynn–Shacham (BLS) signature, a committee was established consisting of operators with consistent voting power. A Merkle tree, generated from the attestation node information, embeds its root in the batch structure.

After the verification process, the attestation node uploads the BLS signature of the batch to the server. A key feature of BLS signatures is their ability to be aggregated, allowing for more efficient processing.

The Role of EigenLayer AVS in LSC

### Role of EigenLayer AVS in LSC 

Independent operators can deploy the Lagrange State Committees in combination with restaking through EigenLayer, to address several challenges with current approaches to cross-chain interoperability. 

Lagrange’s dynamic BLS key aggregation improves the verification process by updating proofs incrementally rather than recalculating from scratch. This enables EigenLayer operators to scale without compromising soundness, allowing higher participation rates without increasing the computational overhead. By leveraging these innovations, AVS deployments gain access to more flexible, expressive, and secure workflows, making cross-chain communication and interoperability more resilient.