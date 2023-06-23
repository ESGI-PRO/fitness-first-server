###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

COPY package*.json .

COPY package*.json ./

RUN npm update npm -g
RUN npm cache clean --force
RUN npm i

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

RUN npm build

CMD [ "npm", "run", "start:prod" ]
