FROM node:18.15.0-alpine3.17
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD . /var/www/permission
RUN npm install
CMD npm run build && npm run start:prod
