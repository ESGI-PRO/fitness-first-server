###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

WORKDIR /usr/src/gateway-api

RUN pwd

COPY --chown=node:node package*.json ./

RUN ls -a
RUN npm ci

COPY --chown=node:node . .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/gateway-api

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/gateway-api/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/gateway-api/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/gateway-api/dist ./dist

CMD [ "node", "dist/main.js" ]
