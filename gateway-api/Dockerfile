# FROM node:18.5-alpine
# RUN npm install npm@latest -g
# RUN mkdir -p /var/www/gateway
# WORKDIR /var/www/gateway
# ADD . /var/www/gateway
# COPY gateway-api/package*.json ./
# COPY . .
# RUN apk update && apk add --no-cache nodejs npm
# RUN npm cache clean --force
# RUN npm install


# CMD npm run build && npm run start:prod

FROM node:18.5-alpine AS builder
WORKDIR "/var/www/gateway"
COPY . .
RUN npm i
RUN npm run build
RUN npm prune --production
RUN npm install -g @nestjs/cli
EXPOSE 8000

FROM node:16-alpine AS production
WORKDIR "/var/www/gateway"
COPY --from=builder /var/www/gateway/package.json ./package.json
COPY --from=builder /var/www/gateway/dist ./dist
COPY --from=builder /var/www/gateway/node_modules ./node_modules
CMD [ "sh", "-c", "npm run start:prod"]
