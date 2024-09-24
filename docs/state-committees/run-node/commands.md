---
id: commands
title: "Commands"
description: CLI commands for State Committees attestation nodes
author: kashish
---

:::info
Please store back up your BLS and ECDSA key pairs. Do not discard keys under any circumstance. Your keys are located at `~/.lagrange/keystore/<key_type>_<public_key_prefix>.key`.
:::

### generate-keystore

- Generates a new key pair for the given key type and password, and saves it in the keystore file. The key type can be either `ecdsa` or `bls`.

```bash
lagrange-cli generate-keystore -t <Key Type> -p <Password>

# i.e. ./dist/lagrange-cli generate-keystore -t ecdsa -p 'password@123!'
```

### import-keystore

- Imports a key pair from the given private key and saves it in the keystore file. The key type can be either `ecdsa` or `bls`.

```bash
lagrange-cli import-keystore -t <Key Type> -p <Password> -k <Private Key>

# i.e. ./dist/lagrange-cli import-keystore -t bls -p 'password@123!' -k 0x1234567890abcdef...
```

### export-keystore

- Exports a private key from the keystore file for the given key type and password.

```bash
lagrange-cli export-keystore -t <Key Type> -p <Password> -f <Keystore File Path>

# i.e. ./dist/lagrange-cli export-keystore -t ecdsa -p 'password@123!' -f ~/.lagrange/keystore/bls_.key
```

### export-public-key

- Exports a public key from the keystore file for the given key type.

```bash
  lagrange-cli export-public-key -t <Key Type> -f <Keystore File Path>

  # i.e. ./dist/lagrange-cli export-public-key -t ecdsa -f ~/.lagrange/keystore/ecdsa_.key
```

### register-operator

- Registers an operator to the Lagrange State Committees. The network name can be either `mainnet` or `holesky`. The BLS key and Signer address are referenced from the config file.

```bash
lagrange-cli register-operator -c <CLI Config File Path>  -n <Network Name>

# i.e. ./dist/lagrange-cli register-operator -c ./config.toml -n mainnet
```

### deregister-operator

- Deregisters an operator from the Lagrange State Committees. The network name can be either `mainnet` or `holesky`.

```bash
lagrange-cli deregister-operator -c <CLI Config File Path>  -n <Network Name>

# i.e. ./dist/lagrange-cli deregister-operator -c ./config.toml -n mainnet
```

### update-bls-pub-key

- Updates the BLS public key for the operator at the given index. The network name can be either `mainnet` or `holesky`. New BLS key is referenced from the config file.

```bash
lagrange-cli update-bls-pub-key -c <CLI Config File Path>  -n <Network Name> -i <Key Index>

# i.e. ./dist/lagrange-cli update-bls-pub-key -c ./config.toml -n mainnet -i 0
```

### update-signer-address

- Updates the signer address for the operator. The network name can be either `mainnet` or `holesky`. New signer address is referenced from the config file.

```bash
lagrange-cli update-signer-address -c <CLI Config File Path>  -n <Network Name>

# i.e. ./dist/lagrange-cli update-signer-address -c ./config.toml -n mainnet
```

### add-bls-pub-key

- Adds a new BLS public key for the operator. The network name can be either `mainnet` or `holesky`. New BLS key is referenced from the config file.

```bash
lagrange-cli add-bls-pub-key -c <CLI Config File Path>  -n <Network Name>

# i.e. ./dist/lagrange-cli add-bls-pub-key -c ./config.toml -n mainnet
```

### remove-bls-pub-key

- Removes the BLS public key for the operator at the given index. The network name can be either `mainnet` or `holesky`.

```bash
lagrange-cli remove-bls-pub-key -c <CLI Config File Path>  -n <Network Name> -i <Key Index>

# i.e. ./dist/lagrange-cli remove-bls-pub-key -c ./config.toml -n mainnet -i 0
```

### subscribe-chain

- Subscribes the operator to the given chain. The network name can be either `mainnet` or `holesky`. ([Supported Chains](/state-committees/operator-guide/supported-chains))

```bash
lagrange-cli subscribe-chain -c <CLI Config File Path>  -n <Network Name> -r <Chain Name>

# i.e. ./dist/lagrange-cli subscribe-chain -c ./config.toml -n mainnet -r optimism
```

### unsubscribe-chain

- Unsubscribes the operator from the given chain. The network name can be either `mainnet` or `holesky`. ([Supported Chains](/state-committees/operator-guide/supported-chains))

```bash
lagrange-cli unsubscribe-chain -c <CLI Config File Path>  -n <Network Name> -r <Chain Name>

# i.e. ./dist/lagrange-cli unsubscribe-chain -c ./config.toml -n mainnet -r optimism
```

### generate-config

- Generates an attestation node config file. The network name can be either `mainnet` or `holesky`. ([Supported Chains](/state-committees/operator-guide/supported-chains))
  - The L1 RPC endpoint is the Ethereum mainnet RPC endpoint for both mainnet and Holesky testnet.
  - The L2 (Optimism or Base) RPC endpoint is the rollup chain's mainnet RPC endpoint for both mainnet and holesky testnet.
  - The Beacon RPC endpoint is the Beacon mainnet RPC endpoint for both mainnet and holesky testnet.

:::info
We recommend using performant providers such as Alchemy, Quicknode, Infura, in the case that you do not run your own nodes. Please use appropriate rate limits. For the Beacon RPC endpoint, you should check if the given RPC provider supports the Beacon RPC API like `/eth/v1/beacon/genesis`. Quicknode supports this API.
:::

```bash
lagrange-cli generate-config -c <CLI Config File Path>  -n <Network Name> -r <Chain Name>

# i.e. ./dist/lagrange-cli generate-config -c ./config.toml -n mainnet -r optimism
```

### generate-signer-config

- Generates config file for signer. The configuration information can be found [here](/state-committees/run-node/configuration).
```bash
lagrange-cli generate-signer-config -c <Signer Config File Path> -i <Docker Image Name>

# i.e. ./dist/lagrange-cli generate-signer-config -c ./config_signer.toml -i lagrangelabs/lagrange-node:v1.1.5
```

### generate-docker-compose

- Generates a docker-compose file for the attestation node. This command can be useful if you want to manually set up your docker-compose.

```bash
lagrange-cli generate-docker-compose -c <CLI Config File Path>  -i <Docker Image Name> -n <Node Config File Path>

# i.e. ./dist/lagrange-cli generate-docker-compose -c ./config.toml -i lagrangelabs/lagrange-node:v1.1.5 -n ~/.lagrange/config/client_mainnet_optimism_.toml
```

:::info
You can check client config files at` ~/.lagrange/config/client_<network_name>_<chain_name>_<bls_pub_key_prefix>.toml` and docker-compose files in the `~/.lagrange/docker-compose_<network_name>_<chain_name>_<bls_pub_key_prefix>.yml`.
:::

### deploy

- Generates a docker-compose file and deploys the docker container for the attestation node. The network name can be either `mainnet` or `holesky`.

```bash
lagrange-cli deploy -c <CLI Config File Path>  -i <Docker Image Name> -n <Node Config File Path>

# i.e. ./dist/lagrange-cli deploy -c ./config.toml -i lagrangelabs/lagrange-node:v1.1.5 -n ~/.lagrange/config/client_mainnet_optimism_.toml
```

### deploy-signer

- Generates a signer config file, docker-compose file and then deploys the container to start a signer gRPC server that can be utilized by the operators for secured key management.

```bash
lagrange-cli deploy-signer -c <Signer Config File Path> -i <Docker Image Name>

# i.e. ./dist/lagrange-cli deploy-signer -c ./config_signer.toml -i lagrangelabs/lagrange-node:v1.1.5
```

### generate-config-deploy

- Generates a client config file and deploys the docker container for the attestation node. It combines the generate-config and deploy commands.

```bash
lagrange-cli generate-config-deploy -c <CLI Config File Path>  -n <Network Name> -r <Chain Name> -i <Docker Image Name>

# i.e. ./dist/lagrange-cli generate-config-deploy -c ./config.toml -n mainnet -r optimism -i lagrangelabs/lagrange-node:v1.1.5
```

### bulk-generate-config-deploy

- Generates multiple client config files and deploys the docker containers for the configured attestation nodes.

```bash
lagrange-cli bulk-generate-config-deploy -b <CLI Bulk Config File Path> -n <Network Name> -i <Docker Image Name>

# i.e. ./dist/lagrange-cli bulk-generate-config-deploy -b ./config_bulk.toml -n mainnet -i lagrangelabs/lagrange-node:v1.1.5
```