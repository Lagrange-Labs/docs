---
id: prerequisite-installation
title: "Prerequisite Installations"
description: The prerequisite installation scripts to run a state committee attestation node
author: kashish
---

:::info
The installation commands provided on this page are for reference. If you use any other platform then please refer to the following download links:

1. Install [Golang](https://go.dev/doc/install)
2. Install [Docker](https://docs.docker.com/engine/install/)
3. Install [Docker Compose](https://docs.docker.com/compose/install/)

:::

## Golang

```bash
sudo apt-get update
sudo apt-get -y upgrade
wget https://go.dev/dl/go1.21.9.linux-amd64.tar.gz
sudo tar -xvf go1.21.9.linux-amd64.tar.gz -C /usr/local
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.profile
export GOROOT=/usr/local/go
source ~/.profile
go version
```

## Docker and Docker Compose

```bash
sudo apt-get update
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo \"$VERSION_CODENAME\") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin make gcc
echo '{ "log-opts": { "max-size": "10m", "max-file": "100" } }' | sudo tee /etc/docker/daemon.json
sudo usermod -aG docker $USER
newgrp docker
sudo systemctl restart docker
```

## Install [Lagrange CLI](https://github.com/Lagrange-Labs/client-cli) from source

```bash
# Latest CLI Version: v0.2.3
git clone https://github.com/Lagrange-Labs/client-cli.git
export CGO_CFLAGS="-O -D__BLST_PORTABLE__"
export CGO_CFLAGS_ALLOW="-O -D__BLST_PORTABLE__"
cd client-cli
go mod download
sudo apt install make gcc
make build
```
