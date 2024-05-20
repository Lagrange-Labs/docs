---
id: configuration-file
title: "Configuration File"
description: The description of config.toml fields for attestation node
author: kashish
---

:::info
Please provide absolute path in KeystorePath and PasswordPath fields in the configuration file.
:::

### Variable Description

The `config.toml` file in the repository contains various fields that should be configured in order to run various [CLI](https://github.com/Lagrange-Labs/client-cli) commands.

`EthereumRPCURL`: Ethereum mainnet RPC endpoint for mainnet, and Holesky RPC endpoint for testnet.

`L1RPCEndpoint`: Ethereum mainnet RPC endpoint for both mainnet and Holesky testnet.

`BeaconURL`: Beacon mainnet RPC endpoint for both mainnet and Holesky testnet.

`L2RPCEndpoint`: Rollup (Optimism or Base) chain's mainnet RPC endpoint for both mainnet and Holesky testnet.

`BLSCurve`: Currently, we only support `BN254` curve.

`ConcurrentFetchers`: This parameter can be used to control the number of parallel fetchers that are responsible to fetch a block. Default value is 8.

`OperatorKeystorePath` = EigenLayer operator keystore file path

`OperatorKeystorePasswordPath` = EigenLayer operator keystore password file path

`SignerECDSAKeystorePath` = ECDSA singner keystore file path

`SignerECDSAKeystorePasswordPath` = ECDSA signer keystore password file path

`BLSKeystorePath` = BLS keystore file path

`BLSKeystorePasswordPath` = BLS keystore password file path
