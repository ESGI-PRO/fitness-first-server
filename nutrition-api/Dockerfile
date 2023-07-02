###################
# COMMON
###################

FROM node:16.14.2-alpine as common-build-stage

WORKDIR /var/www/nutrition-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8001

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
WORKDIR /var/www/nutrition-api

ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/nutrition-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/nutrition-api/dist ./dist

#RUN npm run build

CMD [ "npm", "run", "start:prod" ]