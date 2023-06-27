###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

WORKDIR /usr/src/analytic-api

RUN pwd

COPY package*.json ./

RUN ls -a
RUN npm install

COPY . .

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/analytic-api

COPY package*.json ./

COPY --from=development /usr/src/analytic-api/node_modules ./node_modules

COPY . .

RUN npm run build

ENV NODE_ENV production


RUN npm install && npm ci --only=production && npm cache clean --force

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --from=build /usr/src/analytic-api/node_modules ./node_modules
COPY --from=build /usr/src/analytic-api/dist ./dist

EXPOSE 3001

CMD [ "node", "dist/main.js" ]
