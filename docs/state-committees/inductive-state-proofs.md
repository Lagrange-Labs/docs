---
id: inductive-state-proofs
title: "Inductive State Proofs"
description: An overview of generation inductive state proofs for the batch attested by State Committees
---

## Proof Generation

Lagrange Committees are responsible for signing new batch headers from the arbitrary chain that they are attesting to. Signatures are executed by each node using their BLS key pair from the restaked chain that handles slashing. Along with the batch header, each Lagrange Node also signs a digest of the current_committee for a given batch and the next next_committee for the subsequent batch

For a state proof of a single batch to be valid, the following recursive properties must hold:

1. At least 67% voting power out of the total committee voting power for a given batch b must have signed the batch header. The public keys of these nodes are stored in the current_committee Merkle tree.

2. The current_committee of batch b equals the next_committee tree of batch b-1.

3. Batch b-1 is either the genesis batch or is valid with respect to these three conditions.

This recursive relationship allows any batch to be proven as valid via inductive proof, starting with the base case of an initial hardcoded genesis attestor set. To prove an arbitrary batch, a contract requires an inductive zero-knowledge proof of the validity of the previous batch with respect to genesis and an aggregated BLS signature of the current_commitee of the present batch:

```go
struct BatchHeader {
  var batch_number;
  var chain_id;
  var l2_blocks;
  var l1_block_number;
  var l1_tx_hash;
  var l1_tx_index;
  var l2_from_block_number;
  var l2_to_block_number;
}

struct CommitteeHeader {
  var current_committee;
  var next_committee;
  var total_voting_power;
}


// generate recursive ZK state proof for batch N
func recursive_zk_state_proof() returns (current_committee_hash, batch_hash) {
  // verify ZK state proof for batch N-1
	verify_proof(previous_proof)
	
	// verify the merkle proof for attestation nodes of batch N
	verify_proof(aggregate_proof)
	
	// assert the previous committee hash is the one exposed by the proof of batch N-1
	assert(previous_committee_header.hash() == previous_proof.current_committee_hash)
	
	// assert the current committee is the one expected by the proof of batch N-1
	assert(previous_committee_header.next_committee.hash() == current_committee_hash)
	
	// assert the total voting power for batch N is more than 2/3 of total voting power of the current committee
	assert(aggregate_proof.aggregate_voting_power >= 2/3*current_committee_header.total_voting_power + 1)
	
	// assert the merkle hash reconstructed is the same as current_committee
	assert(aggregate_proof.hash == current_committee_header.current_committee)
	
	// message to sign
	msg = keccak( batch_header.hash() 
			|| current_committee_header.current_committee 
			|| current_committee_header.next_committee 
			|| current_committee_header.total_voting_power)
	
	// verify aggregate bls signature of batch N
	verify_bls_signature(msg, aggregate_proof.aggregate_public_key.unpack())
	
	return current_committee_hash, batch_header.hash()
}
```
