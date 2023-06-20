print('Start #################################################################');

db = db.getSiblingDB('db1');
db.createUser(
    {
        user: 'mongo',
        pwd: 'password',
        roles: [{ role: 'readWrite', db: 'db1' }],
    },
);
db.createCollection('test');

db = db.getSiblingDB('db2');
db.createUser(
    {
        user: 'mongo',
        pwd: 'password',
        roles: [{ role: 'readWrite', db: 'db2' }],
    },
);
db.createCollection('test');

db = db.getSiblingDB('db3');
db.createUser(
    {
        user: 'mongo',
        pwd: 'password',
        roles: [{ role: 'readWrite', db: 'db3' }],
    },
);
db.createCollection('test');

print('END #################################################################');