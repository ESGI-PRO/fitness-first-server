# Token

This service is responsible for generating and verifying tokens.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
TOKEN_SERVICE_PORT=8006
TOKEN_SERVICE_HOST=token-api

MONGO_ROOT_USER=mongo_user
MONGO_ROOT_PASSWORD=password
MONGO_DATABASE=token_db
MONGO_HOST=mongo

MONGO_DSN=mongodb://mongo:27017/token_db

BASE_URI=http://localhost

# JWT

# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=360
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=60
# Number of minutes after which a reset password token expires
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=10
# Number of minutes after which a verify email token expires
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=10
```

