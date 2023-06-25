###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

RUN mkdir -p /var/www/gateway-api
WORKDIR /var/www/gateway-api

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 8000

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /var/www/gateway-api

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /var/www/gateway-api/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /var/www/gateway-api/node_modules ./node_modules
COPY --chown=node:node --from=build /var/www/gateway-api/dist ./dist

CMD [ "node", "dist/main.js" ]
