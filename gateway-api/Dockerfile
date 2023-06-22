###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

RUN npm i -g @nestjs/cli

WORKDIR /gateway-api

COPY ../gateway-api/package*.json .

RUN npm install

COPY ../. .

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
