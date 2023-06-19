#!/bin/bash

# Deploy gateway-api
kubectl apply -f ../deployservice/gateway-deploy.yaml

# Deploy user-api
##kubectl apply -f path/to/user-api-deployment.yaml

# Deploy training-api
#kubectl apply -f path/to/training-api-deployment.yaml