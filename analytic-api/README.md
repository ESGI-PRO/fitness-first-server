# Analytics

This is the analytics service for the tracking data


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
API_GATEWAY_PORT=8000
API_GATEWAY_HOST=gateway-api

ANALYTIC_SERVICE_PORT=8005
ANALYTIC_SERVICE_HOST=analytic-api

MAILER_SERVICE_PORT=8008
MAILER_SERVICE_HOST=mailer-api

MONGO_ROOT_USER=mongo_user
MONGO_ROOT_PASSWORD=password
MONGO_DATABASE=analytic_db
MONGO_HOST=mongo

MONGO_DSN=mongodb://mongo:27017/analytic_db

BASE_URI=http://localhost/
```

