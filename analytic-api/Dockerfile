###################
# COMMON
###################
FROM node:18.5-alpine as common-build-stage

WORKDIR /var/www/analytic-api

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build
RUN npm prune --production

EXPOSE 8005

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
WORKDIR "/usr/src/gateway-api"

ENV NODE_ENV=production
COPY --from=common-build-stage /var/www/analytic-api/node_modules ./node_modules
COPY --from=common-build-stage /var/www/analytic-api/dist ./dist

#RUN npm run build

CMD [ "npm", "run", "start:prod" ]


# ###################
# # BUILD FOR LOCAL DEVELOPMENT
# ###################

# FROM node:18-alpine As development

# WORKDIR /usr/src/gateway-api

# RUN pwd

# COPY package*.json ./

# RUN ls -a
# RUN npm install

# COPY . .

# ###################
# # BUILD FOR PRODUCTION
# ###################

# FROM node:18-alpine As build

# WORKDIR /usr/src/gateway-api

# COPY package*.json ./

# COPY --from=development /usr/src/gateway-api/node_modules ./node_modules

# COPY . .

# RUN npm run build

# ENV NODE_ENV=production

# RUN npm install && npm ci --only=production && npm cache clean --force

# ###################
# # PRODUCTION
# ###################

# FROM node:18-alpine As production

# COPY --from=build /usr/src/gateway-api/node_modules ./node_modules
# COPY --from=build /usr/src/gateway-api/dist ./dist

# EXPOSE 3000

# CMD [ "node", "dist/main.js" ]


# FROM node:16 AS builder
# WORKDIR "/usr/src/gateway-api"
# COPY . .
# RUN npm i
# RUN npm run build
# RUN npm prune --production

# FROM node:16-alpine AS production
# WORKDIR "/usr/src/gateway-api"
# COPY --from=builder /usr/src/gateway-api/package.json ./package.json
# COPY --from=builder /usr/src/gateway-api/dist ./dist
# COPY --from=builder /usr/src/gateway-api/node_modules ./node_modules
# CMD [ "sh", "-c", "npm run start:prod"]