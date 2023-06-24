###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

WORKDIR /var/www/training-api

COPY package*.json ./

RUN npm install

RUN npm install -g concurrently

COPY . .

RUN npx prisma generate

EXPOSE 8003

###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

# CMD [ "npm", "run", "start:dev" ]
CMD [ "concurrently", "npm:start:dev", "npm:prisma:migrate", "npm:prisma:seed" ]

###################
# PRODUCTION
###################

FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

RUN npm build

CMD [ "npm", "run", "start:prod" ]