FROM node:18.15-alpine as common-build-stage

RUN npm install -g pnpm
RUN npm i -g @nestjs/cli

RUN mkdir -p /var/www/token-api

WORKDIR /var/www/token-api

ADD . /var/www/token-api/

EXPOSE 8006

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD pnpm install && pnpm run start:dev

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD pnpm run build && pnpm run start:dev