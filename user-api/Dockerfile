###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

WORKDIR /var/www/user-api

COPY package*.json ./

RUN npm install

RUN npm install -g concurrently

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 8003

###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD [ "concurrently", "npm run start:dev", "npx prisma migrate dev" ]

###################
# PRODUCTION
###################

FROM common-build-stage as production-build-stage

ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/user-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/user-api/dist ./dist

#RUN npm run build

CMD [ "npm", "run", "start:prod" ]