###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

WORKDIR /var/www/subscriptions-api

COPY package*.json ./

<<<<<<< HEAD
ADD . /var/www/subscription-api/
RUN pnpm install
RUN echo "the path is : " && pwd
RUN npx prisma generate
#RUN npx prisma migrate dev --name init
#RUN npx prisma db seed
=======
RUN npm install

COPY . .
>>>>>>> feature/fix-docker

EXPOSE 8009

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