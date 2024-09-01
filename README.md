# StoryNode

![Build & Test](https://github.com/JustElectron/StoryNode/actions/workflows/node.js.yml/badge.svg)

## Build docker
To build the docker containers run:
```bash
docker compose build
```

## Run docker
To run the docker containers in foreground:
```bash
docker compose up
```
To run the docker containers in background:
```bash
docker compose up -d
```

## Read docker logs
When docker containers are running in the background, read the logs:
```bash
docker compose logs [service_name]
```
