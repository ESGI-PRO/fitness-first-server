FROM node:18.15-alpine as common-build-stage

RUN mkdir -p /var/www/analytic-api

WORKDIR /var/www/analytic-api

COPY package*.json ./

#RUN npm install
RUN npm install --production=false

COPY . .

EXPOSE 8005

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD npm run start:dev

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD npm run build && npm run start:dev