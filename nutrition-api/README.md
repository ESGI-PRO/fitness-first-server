# Nutrition

This is the microservice nutrition for the nutrition data


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
API_GATEWAY_PORT=8000
API_GATEWAY_HOST=gateway-api

BASE_URI=http://localhost:8000

NUTRITION_SERVICE_PORT=8001
NUTRITION_SERVICE_HOST=nutrition-api

PERMISSION_SERVICE_PORT=8007
PERMISSION_SERVICE_HOST=permission-api

MAILER_SERVICE_PORT=8008
MAILER_SERVICE_HOST=mailer-api

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=nutrition
POSTGRES_HOST=postgres

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}?schema=public"
```

