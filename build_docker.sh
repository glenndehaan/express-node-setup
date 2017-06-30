#!/bin/bash

#
# This script is used to build the docker container using the Dockerfile.
# After running this script you can manage this container through Kitematic or the Docker CLI
#

CURRENTDIR=$( pwd )
CHECK_DOCKER_CONTAINER_EXISTS=$( docker ps -a | grep express-node-setup )

if [[ ! -z "$CHECK_DOCKER_CONTAINER_EXISTS" ]]; then
    CHECK_DOCKER_CONTAINER_UP=$( docker inspect -f {{.State.Running}} express-node-setup )

    if [ $CHECK_DOCKER_CONTAINER_UP != "true" ]; then
        echo "Aha... Your container is build but you have to start it. Use Kitematic to start the container or use the Docker CLI"
    else
        echo "WOW! Stop! Your container is already build and running! Use Kitematic to view your console or use the Docker CLI"
    fi
else
    echo "Initial Docker container build..."
    echo ""
    docker build -t express-node-setup .

    echo "Starting Docker container..."
    echo ""
    docker run -t -d --name express-node-setup -p 3001:3001 -p 27017:27017 -v $CURRENTDIR:/app express-node-setup

    echo ""
    echo "Alright! Your container is ready! Use Kitematic to view your console or use the Docker CLI"
fi
