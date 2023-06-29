FROM node:18.15-alpine as common-build-stage

RUN mkdir -p /var/www/front

WORKDIR /var/www/front

ADD . /var/www/front/
RUN npx expo install

EXPOSE 19000

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD npm run start

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD npm run build && npm run start