###################
# COMMON
###################

FROM node:18.15-alpine as common-build-stage

WORKDIR /var/www/subscription-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8009

###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development


#CMD [ "concurrently","npm:prisma:generate", "npm:prisma:migrate", "npm:start:dev" ]
CMD [ "npm", "run", "start:dev" ]

###################
# PRODUCTION
###################

FROM common-build-stage as production-build-stage
WORKDIR /var/www/subscription-api

ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/subscription-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/subscription-api/dist ./dist
COPY --from=common-build-stage /var/www/subscription-api/prisma ./prisma
COPY --from=common-build-stage /var/www/subscription-api/package*.json ./

#RUN npm run build

CMD [ "npm", "run", "start:migrate:prod" ]