---
id: scripts
title: "Scripts"
description: Scripts to interact with State Committees AVS contracts
author: kashish
---

The operators can choose to use the scripts instead of running the CLI commands to interact with the contracts for registering the operator and subscribing to the rollup chains.

The scripts can be found in the [CLI](https://github.com/Lagrange-Labs/lsc-client-cli/tree/develop/script) repository.

- Update the **# ==== MODIFY ME! ====** part in the script with your details. You can use `export-public-key` command to get the public key from the keystore file.

- Register Operator:

```bash
source ./script/register-operator.sh
```

- Subscribe chain:

```bash
  source ./script/subscribe-chain.sh
```
