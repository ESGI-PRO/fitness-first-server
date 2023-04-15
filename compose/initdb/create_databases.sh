#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
    CREATE DATABASE users;
    CREATE DATABASE training;
    CREATE DATABASE nutrition;
    CREATE DATABASE analytic;
EOSQL
