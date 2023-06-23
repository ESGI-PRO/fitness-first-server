FROM node:18.5-alpine AS builder

WORKDIR "/var/www/gateway-api"
COPY . .
RUN npm i
RUN npm run build
RUN npm prune --production

EXPOSE 8000

FROM node:16-alpine AS production

WORKDIR "/var/www/gateway-api"
COPY --from=builder /var/www/gateway-api/.env ./.env
COPY --from=builder /var/www/gateway-api/package.json ./package.json
COPY --from=builder /var/www/gateway-api/dist ./dist
COPY --from=builder /var/www/gateway-api/ ./
COPY --from=builder /var/www/gateway-api/node_modules ./node_modules

CMD [ "sh", "-c", "npm run start:prod"]

# ###################
# # COMMON
# ###################

# FROM node:18.5-alpine as common-build-stage

# WORKDIR /var/www/gateway-api

# COPY package*.json ./

# RUN npm update npm -g \
#     && npm cache clean --force \
#     && npm install

# COPY . .

# EXPOSE 8000

# ###################
# # DEVELOPMENT
# ###################

# FROM common-build-stage as development-build-stage

# ENV NODE_ENV=development

# CMD [ "npm", "run", "start:dev" ]

# ###################
# # PRODUCTION
# ###################

# FROM common-build-stage as production-build-stage

# ENV NODE_ENV=production

# RUN npm run build

# CMD [ "npm", "run", "start:prod" ]
