print('Start #################################################################');

db = db.getSiblingDB('users');
db.createUser(
    {
        user: 'mongo_user',
        pwd: 'password',
        roles: [{ role: 'readWrite', db: 'users' }],
    },
);
// db.createCollection('users');

db = db.getSiblingDB('testdb');
db.createUser(
    {
        user: 'mongo_user',
        pwd: 'password',
        roles: [{ role: 'readWrite', db: 'testdb' }],
    },
);
// db.createCollection('users');

db = db.getSiblingDB('api_test_db');
db.createUser(
    {
        user: 'api_user',
        pwd: 'api1234',
        roles: [{ role: 'readWrite', db: 'api_test_db' }],
    },
);
db.createCollection('users');

print('END #################################################################');