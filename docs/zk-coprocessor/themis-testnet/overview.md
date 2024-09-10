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

Lagrange's ZK Coprocessor and Verifiable Database is the first solution enabling developers to express complex queries on-chain and we're building this from scratch. We decided to release Testnet Themis with a reduced feature set to start getting feedback from developers using our tech. In particular, Testnet Themis is

- Focused on proving mapping entries, and in particular ERC721Enumerable entries of NFT ID -> owners entries. That allows us to showcase our early tech to a cool and trendy application!

  - First release is focusing on demo-ing for [Pudgy Penguin NFT collection](https://opensea.io/collection/pudgypenguins).

  - Self serving will come soon after, stay tuned!

- Deterministic query: To start, Testnet Euclid allows you to query the NFT ownership of a particular user address in an arbitrary block range, for ERC721Enumerable contracts. The query parameters that can be changed are the owner address and the block range.

The next section goes into more detail about the API to interact with Testnet Themis.
