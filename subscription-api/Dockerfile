###################
# COMMON
###################

FROM node:16.14.2-alpine as common-build-stage

WORKDIR /var/www/subscriptions-api

COPY package*.json ./

RUN npm install

RUN npm install -g concurrently

COPY . .

EXPOSE 8009

###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development


CMD [ "concurrently","npm:prisma:generate", "npm:prisma:migrate", "npm:prisma:seed", "npm:start:dev" ]

###################
# PRODUCTION
###################

FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

RUN npm build

CMD [ "npm", "run", "start:prod" ]