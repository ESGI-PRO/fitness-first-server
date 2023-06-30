###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

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

CMD [ "concurrently", "npm:start:dev", "npx:prisma:generate", "npx:prisma:migrate", "npx:prisma:seed" ]

###################
# PRODUCTION
###################

FROM common-build-stage as production-build-stage

ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/subscriptions-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/subscriptions-api/dist ./dist

#RUN npm run build

CMD [ "npm", "run", "start:prod" ]