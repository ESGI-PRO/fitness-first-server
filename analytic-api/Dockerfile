###################
# COMMON
###################

<<<<<<< HEAD
RUN mkdir -p /var/www/analytic-api
=======
FROM node:18.5-alpine as common-build-stage
>>>>>>> feature/fix-docker

WORKDIR /var/www/analytic-api

COPY package*.json ./

<<<<<<< HEAD
#RUN npm install
RUN npm install --production=false
=======
RUN npm install
>>>>>>> feature/fix-docker

COPY . .

EXPOSE 8005

###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

<<<<<<< HEAD
CMD npm run start:dev
=======
CMD [ "npm", "run", "start:dev" ]

###################
# PRODUCTION
###################
>>>>>>> feature/fix-docker

FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

<<<<<<< HEAD
CMD npm run build && npm run start:dev
=======
RUN npm build

CMD [ "npm", "run", "start:prod" ]
>>>>>>> feature/fix-docker
