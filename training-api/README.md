
# Training

This is the training service for the training application.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
API_GATEWAY_PORT=8000
API_GATEWAY_HOST=gateway-api

TRAINING_SERVICE_PORT=8003
TRAINING_SERVICE_HOST=training-api

MAILER_SERVICE_PORT=8008
MAILER_SERVICE_HOST=mailer-api

BASE_URI=http://localhost

POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=training
POSTGRES_HOST=postgres

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}?schema=public"
```

