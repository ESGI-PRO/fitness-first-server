###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

WORKDIR /usr/src/permission-api

COPY package*.json ./

RUN npm install -g @nestjs/cli
RUN npm install

COPY . .

EXPOSE 8007

CMD [ "npm", "run", "start:dev" ]

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/permission-api

COPY package*.json ./

COPY --from=development /usr/src/permission-api/node_modules ./node_modules

COPY . .

RUN npm run build

ENV NODE_ENV production


RUN npm install && npm ci --only=production && npm cache clean --force

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --from=build /usr/src/permission-api/node_modules ./node_modules
COPY --from=build /usr/src/permission-api/dist ./dist

CMD [ "node", "dist/main.js" ]
