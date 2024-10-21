---
id: deploy
title: "Deploy Attestation Node"
description: The steps to deploy State Committees attestation node
---

Once an operator has successfully registered to Lagrange State Committees AVS and subscribed to rollup chain/s, they can proceed to deploy attestation node/s.

## Deploy using CLI

In the latest version of the CLI (`v1.1.x`), we have introduced the feature of remote Signer for secured key management of the attestation nodes. This is an optional feature so if the operator doesn't want to configure this feature, please use the CLI version `v1.0.x` and directly deploy the attestation node.

### Signer

The remote signer enhances security and flexibility within the State Committee network as this allows the operators to manage private keys more securely and efficiently, especially when operating multiple attestation nodes across different chains.

For secure communication between the signer server and attestation nodes, TLS encryption has been added. This step is **optional** and can be omitted if you are operating within a private or secured network environment. The operators can configure TLS by generating the required certificates and keys.

#### Generate Certificates and Keys

- Use the script available in the lsc-client-cli repository ([here](https://github.com/Lagrange-Labs/lsc-client-cli/blob/develop/script/generate-cert.sh)) to generate necessary  certificates. 
- Before running the script, specify the signer server’s IP or DNS in this [file](https://github.com/Lagrange-Labs/lsc-client-cli/blob/develop/script/ext.conf).

#### Setting up Remote Signer

- Configure the `config_signer.toml` file
- Add the following keys to your `config_signer.toml` file:
    - EigenLayer operator's ECDSA key
    - BLS (BN254) key
    - Lagrange's ECDSA key
- Run `deploy-signer` command to generate a config and deploy a docker container for the signer server.

:::info
The operators should be able to add all the private keys to the signer by modifying this [config_signer.toml](https://github.com/Lagrange-Labs/lsc-client-cli/blob/develop/config_signer.toml) file.
:::

#### Sample Signer Config Setup

```toml
# GRPC_PORT_SIGNER
GRPCPort = "9092"

# TLSConfig is optional
[TLSConfig]
        CACertPath = ""
        NodeKeyPath = ""
        NodeCertPath = ""

# LSC BLS Key
[[ProviderConfigs]]
        Type = "local"
        [ProviderConfigs.LocalConfig]
                AccountID = "lsc-bls-key-1"
                KeyType = "BN254"
                PrivateKeyPath = "--- Path to BLS Private Key ---" # Absolute path of $HOME/.lagrange/keystore/bls_xxx.key
		        PasswordKeyPath = "--- Path to BLS Keystore Password ---" # Absolute path of password file

# LSC specific ECDSA key
[[ProviderConfigs]]
        Type = "local"
        [ProviderConfigs.LocalConfig]
                AccountID = "lsc-ecdsa"
                KeyType = "ECDSA"
                PrivateKeyPath = "--- Path to ECDSA Private Key ---" # Absolute path of $HOME/.lagrange/keystore/ecdsa_xxx.key
                PasswordKeyPath = "--- Path to ECDSA Keystore Password ---" # Absolute path of password file

[[ProviderConfigs]]
        Type = "local"
        [ProviderConfigs.LocalConfig]
                AccountID = "eigenlayer-operator-ecdsa"
                KeyType = "ECDSA"
                PrivateKeyPath = "--- Path to ECDSA Private Key ---" # Absolute path of $HOME/.lagrange/keystore/ecdsa_xxx.key
                PasswordKeyPath = "--- Path to ECDSA Keystore Password ---" # Absolute path of password file
```

### Attestation Node

- Configure the `config.toml` file. If you are setting up the signer, `OperatorKeyAccountID`, `SignerKeyAccountID` & `BLSKeyAccountID` should be configured as per the `AccountID` field set in the `config_signer.toml`
- Run `generate-config` command to generate a config specific to the chain and network for which you want to run an attestation node.
- Run `deploy` command to deploy the docker container of your attestation node. Alternately, run `generate-config-deploy` which combines the `generate-config` and `deploy` commands.


If you choose to run multiple attestation nodes on the same machine for the same or different chains, then the deployment can be simplified using the `bulk-generate-config-deploy` command.

:::info
The information about the State Committee CLI commands can be found on the [Commands](/state-committees/run-node/commands) page.
:::

After deploying an attestation node docker container, it is imperative for an operator to monitor its status to check if it is running and attesting successfully.

#### Sample Attestation Node Config Setup

```toml
# GRPC_PORT_SIGNER
SignerServerURL = "lagrange_signer:9092"
OperatorAddress = "--- Operator Address ---"
OperatorKeyAccountID = "eigenlayer-operator-ecdsa"
SignerKeyAccountID = "lsc-ecdsa"
BLSKeyAccountID = "lsc-bls-key-1"
BLSCurve = "BN254"
ConcurrentFetchers = 8
MetricsEnabled = true
MetricsServerPort = "8080"
HostBindingPort = "8080"
MetricsServiceName = "lagrange-node"
PrometheusRetentionTime = "60s"
EthereumRPCURL = "--- Ethereum RPC URL (mainnet / holesky) ---"
L1RPCEndpoint = "--- L1 RPC Endpoint (mainnet) ---"
BeaconURL = "--- Beacon Endpoint (mainnet) ---"
L2RPCEndpoint = "--- L2 RPC Endpoint (optimism / base) ---"
# The following fields should be same as that of TLSConfig in config_signer.toml
[CertConfig]
    CACertPath = ""
    NodeKeyPath = ""
    NodeCertPath = ""
```

## Deploy using template

The templates for signer and attestation node's config file and their respective docker-compose can be found in the [CLI](https://github.com/Lagrange-Labs/lsc-client-cli/tree/develop/templates) repository.

:::info
Please review the [configuration](/state-committees/run-node/configuration) description.
:::

1. Replace `{{.xxx}}` in the template files with appropriate values.
2. Run the following command to deploy the docker container for attestation node:

```bash
docker compose up -f <docker_compose_file_name> -d
```
