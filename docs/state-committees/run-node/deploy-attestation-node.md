---
id: deploy
title: "Deploy Attestation Node"
description: The steps to deploy State Committees attestation node
author: kashish
---

Once an operator has successfully registered to Lagrange State Committees AVS and subscribed to rollup chain/s then they can proceed to deploy attestation node/s.

1. Run `generate-config` command to generate a config specific to the chain and network for which you want to run an attestation node.
2. Run `deploy` command to deploy the docker container of your attestation node.

After deploying an attestation node docker container, it is imperative for an operator to monitor its status to check if it is running and attesting successfully.
