---
id: deploy
title: "Deploy Attestation Node"
description: The steps to deploy State Committees attestation node
author: kashish
---

Once an operator has successfully registered to Lagrange State Committees AVS and subscribed to rollup chain/s, they can proceed to deploy attestation node/s.

## Deploy using CLI

In the latest version of the CLI (`v1.1.x`), we have introduced the feature to configure TLS for gRPC communication of the attestation nodes and also a remote Signer component for secure key management. If the operator doesn't want to configure these features, please use the CLI version `v1.0.x` and start from step #3.

1. The operators can configure TLS by generating the required certificates and keys.

   - The script to generate certificates can be found in the lsc-node repository [here](https://github.com/Lagrange-Labs/lsc-node/blob/develop/testutil/vector/generator.sh). The signer server IP or DNS can be specified in this [file](https://github.com/Lagrange-Labs/lsc-node/blob/develop/testutil/vector/ext.conf) before running the script.

2. Configure the `config_signer.toml` file for EigenLayer operator's ECDSA key, BLS (BN254) key and Lagrange's ECDSA key. Then, run `deploy-signer` command to generate a config and deploy a docker container for the signer server.

3. Run `generate-config` command to generate a config specific to the chain and network for which you want to run an attestation node. Then run `deploy` command to deploy the docker container of your attestation node. Alternately, run `generate-config-deploy` which combines the `generate-config` and `deploy` commands.


If you choose to run multiple attestation nodes on the same machine for the same or different chains, then the deployment can be simplified using the `bulk-generate-config-deploy` command.

:::info
The information about the State Committee CLI commands can be found on the [Commands](/state-committees/run-node/commands) page.
:::

After deploying an attestation node docker container, it is imperative for an operator to monitor its status to check if it is running and attesting successfully.

## Deploy using template

The templates for attestation node's config file and the docker-compose can be found in the [CLI](https://github.com/Lagrange-Labs/lsc-client-cli/tree/develop/templates) repository.

:::info
Please review the [configuration](/state-committees/run-node/configuration) description.
:::

1. Replace `{{.xxx}}` in the template files with appropriate values.
2. Run the following command to deploy the docker container for attestation node:

```bash
docker compose up -f <docker_compose_file_name> -d
```
