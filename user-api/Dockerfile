###################
# COMMON
###################

FROM node:18.15-alpine as common-build-stage

WORKDIR /var/www/user-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8002

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

WORKDIR /var/www/user-api
ENV NODE_ENV=production

ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/user-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/user-api/dist ./dist

#RUN npm run build

CMD [ "npm", "run", "start:prod" ]