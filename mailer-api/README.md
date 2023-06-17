# Mailer

Mailer is a microservice that sends emails to users.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
API_GATEWAY_PORT=8000
API_GATEWAY_HOST=gateway-api

USER_SERVICE_PORT=8002
USER_SERVICE_HOST=user-api

MAILER_SERVICE_PORT=8008
MAILER_SERVICE_HOST=mailer-api

MONGO_ROOT_USER=mongo_user
MONGO_ROOT_PASSWORD=password
MONGO_DATABASE=user_db
MONGO_HOST=mongo

MONGO_DSN=mongodb://mongo:27017/user_db

BASE_URI=http://localhost
```

