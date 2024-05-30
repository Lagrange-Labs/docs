---
id: block-database
title: "Block Database"
description: A detailed overview of Block database
---

Remember the ZK Coprocessor is dealing with historical queries, so it needs to keep around each individual state and storage trees for each blocks ! In essence, the ZK Coprocessor is doing a snapshot of the database at each block. But to prove the correct transformation, it needs to prove that the latest state inserted really belongs to the corresponding block in the target blockchain, and the new block is consecutive to the previous one.

The solution is to re-create a structure of consecutive blocks in another proof-friendly data structure, that is updated constantly for each new block produced!

## Leaf Structure

The leaves of this tree are SNARK-friendly block headers (SFBH). These headers includes

- The block number

- The original “blockchain” block hash

- The root of the State Merkle Tree, computed in the previous section, that corresponds to this block number

## Block Tree Creation & Structure

**Initialisation**: The tree is set to a fixed size, for example with $n = 2^{26}$ leaves set to “0”. This creates a root $U_0$ that any one can recompute, and that the verifier (smart contract) will have.

> With 2^26, assuming a block rate of 12s, that gives more than 25 years of usage

**Updating**: When a new block has been issued, and after we’ve created the equivalent State Database, we can update the block database with the new SFBH. The position of the new header in the tree is determined by the block number.

- Example: if we start processing from block number 108351, then the block header for block number 108351+10 will be set at the 10th index of the block database.

- ⚠️ **Cryptographic proofs: There is always a recursive proof p being created when updating this tree.** This is the proof that shows the tree has been updated correctly from the original root $U_0$ to the current block number $U_i$. This proof is “the final proof that shows our equivalent database contains the same data than the original blockchain”.
