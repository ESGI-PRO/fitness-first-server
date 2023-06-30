###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

WORKDIR /usr/src/nutrition-api

COPY package*.json ./

RUN npm install -g @nestjs/cli
RUN npm install

RUN npm install -g concurrently

COPY . .

RUN npx prisma generate

EXPOSE 8001

<<<<<<< HEAD
CMD [ "npm", "run", "start:dev" ]
=======
###################
# DEVELOPMENT
###################

FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

# CMD [ "npm", "run", "start:dev" ]
# CMD [ "concurrently", "npm:start:dev", "npm:prisma:migrate", "npm:prisma:seed" ]
CMD [ "concurrently", "npm run start:dev", "npx prisma migrate dev" ]
>>>>>>> feature/fix-docker

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/nutrition-api

COPY package*.json ./

COPY --from=development /usr/src/nutrition-api/node_modules ./node_modules

COPY . .

RUN npm run build

ENV NODE_ENV production


RUN npm install && npm ci --only=production && npm cache clean --force

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --from=build /usr/src/nutrition-api/node_modules ./node_modules
COPY --from=build /usr/src/nutrition-api/dist ./dist

CMD [ "node", "dist/main.js" ]
