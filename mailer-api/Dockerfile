###################
# COMMON
###################

FROM node:18.15-alpine as common-build-stage

WORKDIR /var/www/mailer-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8008

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
WORKDIR /var/www/mailer-api

ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/mailer-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/mailer-api/dist ./dist

#RUN npm run build

CMD [ "npm", "run", "start:prod" ]