#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
    CREATE DATABASE auth;
    CREATE DATABASE users;
    CREATE DATABASE training;
    CREATE DATABASE nutrition;
EOSQL
