FROM node:16.14.2-alpine as common-build-stage

RUN npm install -g pnpm
RUN npm i -g @nestjs/cli

RUN mkdir -p /var/www/messenger-api

WORKDIR /var/www/messenger-api

ADD . /var/www/messenger-api/
RUN pnpm install

EXPOSE 9000

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD pnpm run start:dev

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD pnpm run build && pnpm run start:dev