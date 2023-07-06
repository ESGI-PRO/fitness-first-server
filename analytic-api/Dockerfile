###################
# COMMON
###################

FROM node:16.14.2-alpine as common-build-stage

WORKDIR /var/www/analytic-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8005

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
WORKDIR /var/www/analytic-api
ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/analytic-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/analytic-api/dist ./dist
COPY --from=common-build-stage  /var/www/analytic-api/package*.json ./

EXPOSE 8005

#RUN npm build

CMD [ "npm", "run", "start:prod" ]