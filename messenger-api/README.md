# Messenger

A simple messenger app built with Node.js, Express.js, MongoDB, and Socket.io

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
API_GATEWAY_PORT=8000
API_GATEWAY_HOST=gateway-api

MAILER_SERVICE_PORT=8008
MAILER_SERVICE_HOST=mailer-api

MESSENGER_SERVICE_PORT=8010
MESSENGER_SERVICE_HOST=messenger-api

USER_SERVICE_PORT=8002
USER_SERVICE_HOST=user-api

BASE_URI=http://localhost

MONGO_ROOT_USER=mongo_user
MONGO_ROOT_PASSWORD=password
MONGO_DATABASE=messenger_db
MONGO_HOST=mongo

MONGO_DSN=mongodb://mongo:27017/messenger_db

BASE_URI=http://localhost

TWILIO_ACCOUNT_SID=ACb7be5b2ad88287744fe18bfd19acf3b9
TWILIO_API_KEY_SID=SKb6b7d8abc0c0ca4254b35a658d07b574
TWILIO_API_KEY_SECRET=LZgcXmE23tp2WPvV5bhZ8NN9gH6cwl7J

```
