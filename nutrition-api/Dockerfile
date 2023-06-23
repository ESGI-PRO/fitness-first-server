###################
# COMMON
###################

FROM node:18.5-alpine as common-build-stage

WORKDIR /var/www/nutrition-api

<<<<<<< HEAD
ADD . /var/www/nutrition-api/
RUN echo "the path is : " && pwd
RUN pnpm install
RUN npx prisma generate
# RUN npx prisma migrate dev --name init
=======
COPY package*.json ./

RUN npm install

COPY . .
>>>>>>> feature/fix-docker

EXPOSE 8001

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