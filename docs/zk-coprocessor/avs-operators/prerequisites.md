---
id: pre-requisites
title: "Pre-requisites"
description: A detailed description on the relation between the stake of an operator and the proof generation tasks it must fulfill
---

## Operator on EigenLayer

First, an operator must be registered to the EigenLayer registry. To do so, one must follow [the EigenLayer docs](https://docs.eigenlayer.xyz/eigenlayer/operator-guides/operator-installation#operator-configuration-and-registration). The operator must have some stake delegated to it as well.

:::info
For **testnet**, one needs to get Holesky ETH via their faucet and manually stake on themselves. See [their documentation](https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/stage-2-testnet/obtaining-testnet-eth-and-liquid-staking-tokens-lsts) for more information.
:::

There is a main ecdsa key associated with that operator which we will call `avs_key` . Following the documentation of EigenLayer, the private key should be encrypted in [keystore file](https://goethereumbook.org/keystore/).

## Hardware

**We recommend setting up the worker on a dedicated instance because of the ratio price / performance. **

The baseline hardware is 8c / 16 threads with 40+GB RAM. We recommend setting these up for example:

- [Hetzner AX-52](https://www.hetzner.com/dedicated-rootserver/ax52/)

- [OVH Advance 2](https://www.ovhcloud.com/en/bare-metal/prices/?display=list&range=advance)

### Cloud based instances

We are also running different workers on the cloud. The following table is representing the type of machine that we run on the three categories:

| Category    | vCPU | RAM |
| ----------- | ---- | --- |
| small (sc)  | 20   | 40  |
| medium (sp) | 40   | 80  |
| large       | 90   | 180 |

:::info
Note that given the parallism of the current proof system is not optimal yet (plonky2), it is possible to run 2 worker binaries in the same instance for the moment.
:::

## Installation

### Pre-requisite

For ease of use, the worker binary is delivered via Docker and we provide docker-compose scripts to automate some common operations.

- Docker ([installation link](https://docs.docker.com/get-docker/))

- Docker-compose ([installation link](https://docs.docker.com/compose/install/))

### RPC Node endpoint

For [the registration](https://lagrange-labs.gitbook.io/lagrange-v2-1/zk-coprocessor/avs-operators/registration), the operator needs to access a working Eth JSON-RPC endpoints to submit his registration transaction.

- For mainnet, this should point to a Eth mainnet node

- For testnet, this should point to Holesky testnet node (testnet network ran by Eigen)

## Worker Repository

Now you're ready to download the worker repository that contains predefined configuration files to run the worker:

```bash
git clone https://github.com/Lagrange-Labs/worker.git
cd worker
```
