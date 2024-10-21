---
id: deploy
title: "Deploy Attestation Node"
description: The steps to deploy State Committees attestation node
---

Once an operator has successfully registered to Lagrange State Committees AVS and subscribed to rollup chain/s, they can proceed to deploy attestation node/s.

## Deploy using CLI

1. Run `generate-config` command to generate a config specific to the chain and network for which you want to run an attestation node.
2. Run `deploy` command to deploy the docker container of your attestation node.

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
