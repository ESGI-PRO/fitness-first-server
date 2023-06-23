FROM node:18.5-alpine
RUN npm install npm@latest -g
RUN mkdir -p /var/www/gateway
WORKDIR /var/www/gateway
ADD . /var/www/gateway
COPY gateway-api/package*.json ./
COPY gateway-api/tsconfig.json ./
COPY gateway-api/nest-cli.json ./
COPY gateway-api/src ./src
COPY gateway-api/test ./test
RUN apk update && apk add --no-cache nodejs npm
RUN npm cache clean --force
RUN npm install
RUN npm install -g @nestjs/cli
EXPOSE 8000

CMD npm run build && npm run start:prod
