---
id: deregister
title: "Deregister"
description: The operator deregisteration steps for ZK Coprocessor AVS
---

This guide provides step-by-step instructions for deregistering an operator from the Lagrange network.

## Prerequisites

Before proceeding with deregistration, ensure the following:

- You have previously registered to the AVS and keystore is configured as mentioned in the [register documentation](/zk-coprocessor/avs-operators/register).
- The Ethereum keystore (`priv_key.json`) generated by the EigenLayer CLI is available and properly configured under the `config/` directory.
- You have the password used to encrypt the Lagrange keystore.

## Steps

1. Export the password used for the Lagrange keystore as an environment variable (AVS\_\_LAGR_PWD). This ensures the deregistration process can access the encrypted Lagrange key.

```bash
export AVS__LAGR_PWD='your_lagrange_password'
```

2. Run the deregister command

```bash
docker compose run --rm worker avs de-register
```

For any assistance, please reach out to the Lagrange team.
