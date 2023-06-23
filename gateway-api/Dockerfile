FROM node:18.5-alpine
RUN npm install npm@latest -g
RUN mkdir -p /var/www/gateway
WORKDIR /var/www/gateway
ADD . /var/www/gateway
RUN apt-get install nodejs npm
RUN npm install
CMD npm run build && npm run start:prod
