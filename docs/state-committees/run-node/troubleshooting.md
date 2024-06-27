---
id: troubleshooting
title: "Troubleshooting"
description: The steps to troubleshoot issues for operators
author: kashish
---

**How can i check if my operator is registered to State Committees AVS and subscribed to the chain/s?**

You can check if your operator is present in the list of operators registered to State Committees AVS on [holesky](https://holesky.eigenlayer.xyz/avs/0x18a74e66cc90f0b1744da27e72df338cea0a542b) or [mainnet](https://app.eigenlayer.xyz/avs/0x35f4f28a8d3ff20eed10e087e8f96ea2641e6aa2) EigenLayer dashboard.

You'd also receive transaction ids upon successfully registering to AVS and subscribing to the chains. You can check the transaction on Etherscan for our [Service contract](https://docs.lagrange.dev/state-committees/operator-guide/contract-addresses).

**failed to subscribe: execution reverted: The dedicated chain is locked**

The rollup chain is locked for new subscriptions during the next committee computation. Please retry the step after 1 hour.

**How can I check if my operator is attesting to the batches of rollup blocks?**

You can search for _"uploaded the signature up to block xxxx"_ in the [docker container logs](https://docs.lagrange.dev/state-committees/run-node/monitoring#docker-logs) or check on State Committee [holesky](https://holesky-dashboard.lagrange.dev/operators/) or [mainnet](https://dashboard.lagrange.dev/operators) dashboard.

**failed to join the network: the given operator is not a member of the current committee**

If you have just subscribed to the rollup chain and joined the State Committee network, you'll see this error until your operator gets picked up in the next epoch. The mainnet epoch rotation period is 1 week.

**failed to create the rpc client, please check the chain name, the chain name should look like 'optimism', 'base'**

This error indicates an issue with the `L2RPCEndpoint`. Please use an appropriate RPC endpoint for the rollup and make sure that the network settings do not restrict the attestation node from calling the RPC.

**the batch is not found, please check the metrics for the RPC provider. There may be a delay or a performance issue.**

The attestation node needs to be able to fetch the L1 and L2 data using the RPC endpoints. Please avoid using public RPCs and instead ensure that your RPC endpoints are not getting rate limited.

**failed to get blob sidecars**

This indicates an issue with your `BeaconURL`. Please make the following `curl` request from your machine where you are running your attestation node to check if the endpoint is reachable.

```bash
time curl <beacon_url>/eth/v1/beacon/genesis
```

**the current batch is not finalized yet due to a lack of voting power. Please wait until getting enough voting power.**

A batch can be considered finalized only if more than 2/3rd of the total voting power has attested the given batch. You might see this warning message when there is an insufficient voting power.

**the given round is not initialized yet. It may be because the sequencer is waiting for the next batch since it is almost caught up with the current block. Please wait for the next batch.**

State Committees network attests to a batch of rollup blocks that settles on a L1 block. So when the network is waiting for a new batch to be available, you'll see this warning message. The current batch frequency ranges from 4 to 6 minutes.
