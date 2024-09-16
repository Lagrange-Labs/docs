---
id: configuration
title: "Configuration"
description: The description of fields in config file
author: kashish
---

:::info
Please provide the correct relative/absolute path in KeystorePath and PasswordPath fields in the configuration file. The KeystorePath field should have file with `.key` extension.
:::

### Variable Description

#### Attestation Node Config

The [config.toml](https://github.com/Lagrange-Labs/lsc-client-cli/blob/develop/config.toml) file in the repository contains various fields that should be configured in order to run various CLI commands.

- `EthereumRPCURL`: Ethereum mainnet RPC endpoint for mainnet, and Holesky RPC endpoint for testnet.

- `L1RPCEndpoint`: Ethereum mainnet RPC endpoint for both mainnet and Holesky testnet.

- `BeaconURL`: Beacon mainnet RPC endpoint for both mainnet and Holesky testnet.

- `L2RPCEndpoint`: Rollup (Optimism or Base or Arbitrum) chain's mainnet RPC endpoint for both mainnet and Holesky testnet.

- `BLSCurve`: Currently, we only support `BN254` curve.

- `ConcurrentFetchers`: This parameter can be used to control the number of parallel fetchers that are responsible to fetch a block. Default value is `8`.

- `SignerServerURL`: This is the gRPC server URL for signer for secure key management.

- `OperatorAddress`: EigenLayer operator address

- `OperatorKeyAccountID`: Account ID provided for storing EigenLayer operator ECDSA key in the signer

- `SignerKeyAccountID`: Account ID provided for storing Lagrange specific ECDSA key in the signer

- `BLSKeyAccountID`: Account ID provided for storing BLS (BN254) key in the signer

- `MetricsServiceName` = The service name used for the metrics. Default is `lagrange-node`.

- `PrometheusRetentionTime` = Retention time for Prometheus metrics data. Default is `60s`.

- `MetricsServerPort`: The port on which Prometheus metrics of the attestation node docker container are exposed.

- `HostBindingPort`: The port to bind the `MetricsServerPort` with the host machine.

- `CACertPath`: The path of self signed certificate for the certificate authority (CA) to enable TLS for gRPC communication of the attestation node.

- `NodeKeyPath`: A new RSA private key for server

- `NodeCertPath`: A certificate signing request (CSR) for the server

- `OperatorKeystorePath` = EigenLayer operator keystore file path (Deprecated from v1.1.x of CLI)

- `OperatorKeystorePasswordPath` = EigenLayer operator keystore password file path (Deprecated from v1.1.x of CLI)

- `SignerECDSAKeystorePath` = ECDSA signer keystore file path (Deprecated from v1.1.x of CLI)

- `SignerECDSAKeystorePasswordPath` = ECDSA signer keystore password file path (Deprecated from v1.1.x of CLI)

- `BLSKeystorePath` = BLS keystore file path (Deprecated from v1.1.x of CLI)

- `BLSKeystorePasswordPath` = BLS keystore password file path (Deprecated from v1.1.x of CLI)

#### Signer Config

The [config_signer.toml](https://github.com/Lagrange-Labs/lsc-client-cli/blob/develop/config_signer.toml) file in the repository contains various fields that should be configured in order to run the signer.

- `AccountID`: Account ID for setting up signer for your keys. The operator can choose the account id of their choice.

- `KeyType`: `BN254` or `ECDSA`

- `PrivateKeyPath`: File path for the ECDSA or BLS private key with extension `.key`

- `PasswordKeyPath`: Password file for the private key



### Mainnet Config

|             | Optimism                                   | Base                                       | Arbitrum                                   |
| ----------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| GrpcUrl     | 34.202.191.166                             | 34.193.82.90                               | 44.208.119.151                             |
| BatchInbox  | 0xFF00000000000000000000000000000000000010 | 0xFf00000000000000000000000000000000008453 | 0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6 |
| BatchSender | 0x6887246668a3b87F54DeB3b94Ba47a6f63F32985 | 0x5050F69a9786F081509234F1a7F4684b5E5b76C9 |                                            |

### Holesky Config

|             | Optimism                                   | Base                                       | Arbitrum                                   |
| ----------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| GrpcUrl     | 44.210.11.64                               | 3.209.124.237                              | 18.211.62.223                              |
| BatchInbox  | 0xFF00000000000000000000000000000000000010 | 0xFf00000000000000000000000000000000008453 | 0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6 |
| BatchSender | 0x6887246668a3b87F54DeB3b94Ba47a6f63F32985 | 0x5050F69a9786F081509234F1a7F4684b5E5b76C9 |
