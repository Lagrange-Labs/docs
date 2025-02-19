---
id: setup-keystore
title: "Set up Keystore"
description: The steps to set up encrypted keystore for ECDSA and BLS keys
---

:::info

1. Before setting up the keystore, it is mandatory to finish the [prerequisite installations](/state-committees/run-node/prerequisite-installation).
2. Please refer to the CLI [commands](/state-committees/run-node/commands) page for more information on each command.
   :::

3. Import/Generate Keystore

   - Run `import-keystore` command to import your EigenLayer Operator ECDSA key. You can also use the keystore which is generated by eigen-cli.
   - If you are an existing operator of Lagrange State Committees AVS and/or have already generated ECDSA signer key and BLS key previously:
     - Run `import-keystore` command to import your ECDSA Signer key and BLS key.
   - If you don't have ECDSA signer key and BLS key:
     - Run `generate-keystore` command to generate a new ECDSA signer key and BLS key for Lagrange State Committees AVS.
   - Backup the password used in the above commands in a text file as it is not possible to recover the private key without the keystore password.

4. Update `config.toml` configuration file.

:::info
This ECDSA signer key and BLS key should be isolated and used only for Lagrange State Committees AVS to ensure security.

ECDSA signer key is only used to verify the identity and signature. It is not used in governance and/or asset flow.

If you plan to run one attestation node each for the available chains, then you only require one BLS key. If you have more than one BLS key, please run `remove-bls-pub-key` command.
:::
