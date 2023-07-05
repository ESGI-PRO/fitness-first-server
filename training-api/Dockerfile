###################
# COMMON
###################

FROM node:16.14.2-alpine as common-build-stage

WORKDIR /var/www/training-api

COPY package*.json ./

RUN npm install npm@latest -g
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8003

###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD npm run start:dev \
    npm run prisma:generate \
    npm run prisma:migrate \
    npm run prisma:seed

#CMD [ "concurrently", "npm:start:dev","npm:prisma:generate", "npm:prisma:migrate", "npm:prisma:seed" ]

###################
# PRODUCTION
###################

FROM common-build-stage as production-build-stage

ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/training-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/training-api/dist ./dist
COPY --from=common-build-stage /var/www/training-api/prisma ./prisma
COPY --from=common-build-stage /var/www/training-api/package*.json ./

#RUN npm run build

CMD [ "npm", "run", "start:migrate:prod" ]