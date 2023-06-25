#!/bin/bash

# dockerize -wait tcp://mysql:3306 -timeout 20s

dockerize -wait tcp://postgres:5432 -timeout 20s

echo "Start Wait Postgres"