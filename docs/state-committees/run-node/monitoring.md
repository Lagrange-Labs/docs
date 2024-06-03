---
id: monitoring
title: "Monitoring"
description: The steps to monitor Attestation Node
author: kashish
---

After successfully completing all the previous steps to deploy the attestation node/s, the operator can monitor its performance through Docker logs and/or Prometheus metrics.

## Docker Logs

- To check the status of the attestation node from the docker container logs, run the below commands:

```bash
# to get the container id
docker ps

# if you are not seeing any running containers, then run the below command to see all suspended containers
docker ps -a

# to check the logs of the container
docker logs <container_id>

# to stop the container
cd $HOME/.lagrange && docker compose -f <docker-compose-file> down --remove-orphans
```

- If you experience an error related to your RPC endpoint, it is mostly due to rate limiting. You can adjust the ConcurrentFetchers in the `config.toml` file to a smaller value to avoid rate limit issues.

## Prometheus Metrics

Lagrange Attestation Nodes exposes prometheus metrics that can be utilized by the operators to monitor the performance of their node. Prometheus metrics client is running on port 8080. There are various labels available which can be used to filter the metrics for a granular view.

### Metrics Description

- `client_get_batch_request`: the response time of `GetBatch` request to the sequencer. This metric can be used to measure the performance of client-server communication.
- `client_join_network_request`: the response time of `JoinNetwork` request. This metric can also be used to check the `JoinNetwork` request count - if there are more requests, it means the attestation node is not working properly.
- `client_try_commit_batch`: the response time of `CommitBatch` request to the sequencer. If there is no commit for an extended period of time, it means the node is not attesting to the batch.
- `client_current_batch_number`: the `batch_number` of the batch that is fetched for attesting. The attestation performance of the node can be monitored by combining this metric with `client_commit_batch_number`.
- `client_commit_batch_number`: the batch_number which is attested by the node and committed to the network.
- `client_commit_batch_number_sample`: the number of committed batches by the node. This metric can provide the full summary of the number of committed batches by the attestation node.
- `rpc_optimism_fetch_l1_blocks`: the time of fetching L1 blocks. This metric can be useful to check the performance of the L1 RPC Provider.
- `rpc_optimism_fetch_l2_blocks`: the time of fetching L2 blocks. This metric can be useful to check the performance of the L2 RPC Provider.
- `rpc_optimism_fetch_beacon_blobs`: the time of fetching beacon blobs. This metric can be useful to check the performance of the beacon RPC Provider.

:::info
If you face any issues while running the Lagrange Attestation Node, please reach out to the Lagrange Labs team on [Discord](http://discord.gg/lagrange) for further support.
:::
