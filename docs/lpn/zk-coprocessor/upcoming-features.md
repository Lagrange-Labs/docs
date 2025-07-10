---
id: upcoming-features
title: "Upcoming features of Lagrange ZK Coprocessor"
description: Upcoming features of Lagrange ZK Coprocessor
---

This section provides a brief introduction of the upcoming features planned for the ZK Coprocessor, focusing on offchain data, batching queries, receipt trie, sub queries, and payments. These enhancements, set to be supported in an upcoming version, aim to expand the capabilities of the existing system.

- **Offchain Data - User-Driven Data Integration**: The introduction of offchain data marks a significant expansion, allowing users to upload their own data in CSV format through an API. This feature enables the creation of private offchain tables, indexed and stored in our verifiable database, which can then be queried and proven on-chain using zero-knowledge proofs. This will enhance flexibility, allowing private data integration for verifiable queries, a notable addition to the current feature set.

- **Batching Queries - Efficiency Through Parallel Processing**: Batching queries is designed to optimize query times by processing multiple rows of verifiable database in a single customized circuit, reducing computational overhead. This approach is particularly beneficial for scalability of ZK Coprocessor, addressing the bottleneck of individual query processing costs.

- **Advanced Queries - Handling Joins & Subqueries**: ZK Coprocessor will extend support for advanced queries—including joins and subqueries—to enable complex data analysis on both on-chain and off-chain data. This enhancement is crucial for users with sophisticated query needs and is backed by ongoing research into efficient proof generation.

- **Receipt Trie - Expanding Query Scope to Event Logs**: Receipt trie support introduces the ability to index and query events emitted by Solidity smart contracts, stored in transaction receipts' logs. This feature significantly broadens the data available for verifiable queries, offering insights into contract interactions beyond static storage.

- **Payments - Value Transfer for Operators and Users in Lagrange Ecosystem**: Payments will be enabled for EigenLayer operators, ZK Coprocessor queryable table sponsors and customers making queries over those tables. This payment integration ensures a robust financial ecosystem, supporting scalability and trust in the ZK Coprocessor network.

The upcoming version of the ZK Coprocessor promises significant advancements, enabling offchain data integration, efficient query batching, expanded event querying via receipt trie, advanced query support, and robust payment systems. These enhancements will offer powerful tools for data-driven decentralized applications.
