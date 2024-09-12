---
id: overview
title: "Themis Testnet Developer Docs"
description: Overview of Themis Testnet Developer Docs
---

## Testnet Goals

The goals of Testnet Themis are twofold:

- Self-serving: Any users can indicate any contracts and variables they wish the ZK Coprocessor to preprocess

- Custom Queries: Users should be able to write any types of (for example SQL) queries, from the most basic to the most complex.

## Overview

Lagrange's ZK Coprocessor and Verifiable Database is the first solution enabling developers to express complex queries on-chain and we're building this from scratch. We decided to release Testnet Themis with a reduced feature set to start getting feedback from developers using our tech. In particular, Testnet Themis is:

- Focused on proving mapping and primitive storage variables
- Self service [query registration](https://app.lagrange.dev/zk-coprocessor/register-query)
- Self service table registration

The next section goes into more detail about the API to interact with Testnet Themis.
