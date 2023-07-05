###################
# COMMON
###################

FROM node:16.14.2-alpine as common-build-stage

WORKDIR /var/www/nutrition-api

<<<<<<< HEAD
COPY package*.json ./

RUN npm install

RUN npm install -g concurrently

COPY . .

=======
ADD . /var/www/nutrition-api/
RUN pnpm install 
# RUN npx prisma generate
# RUN npx prisma migrate dev --name init
>>>>>>> origin/feature/recettes_by_api

EXPOSE 8001

###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

<<<<<<< HEAD
=======
CMD pnpm run build && npx prisma migrate dev --name init && npx prisma db seed && pnpm run start:dev 
# CMD pnpm run build && pnpm run start:dev 

>>>>>>> origin/feature/recettes_by_api

CMD [ "concurrently", "npm:start:dev","npm:prisma:generate", "npm:prisma:migrate", "npm:prisma:seed" ]

###################
# PRODUCTION
###################

FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

<<<<<<< HEAD
RUN npm build

CMD [ "npm", "run", "start:prod" ]
=======
CMD pnpm run build  && && npx prisma migrate dev --name init && npx prisma db seed && pnpm run start:dev
# CMD pnpm run build && pnpm run start:dev 
>>>>>>> origin/feature/recettes_by_api
