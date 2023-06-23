###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

WORKDIR /usr/src/app

COPY ./gateway-api/package.json ./
# COPY ./gateway-api/ ./

RUN npm i -g @nestjs/cli

RUN npm install

COPY . .

EXPOSE 8000

###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD [ "npm", "run", "start:dev" ]

###################
# PRODUCTION
###################

FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD [ "npm", "run", "start:prod" ]