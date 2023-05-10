#!/bin/bash
set -e

#chmod 777 postgres:postgres /docker-entrypoint-initdb.d/create_databases.sh

psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
    CREATE DATABASE users;
    CREATE DATABASE training;
    CREATE DATABASE nutrition;
    CREATE DATABASE analytic;
    CREATE DATABASE subscription;
    CREATE DATABASE messenger;
EOSQL
