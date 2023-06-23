###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

WORKDIR /var/www/messenger-api

<<<<<<< HEAD
ADD . /var/www/messenger-api/
RUN echo "the path is : " && pwd
RUN pnpm install
RUN npx prisma generate
=======
COPY package*.json ./

RUN npm install

COPY . .
>>>>>>> feature/fix-docker

EXPOSE 9000

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