FROM node:18.15-alpine as common-build-stage

RUN npm install -g pnpm
RUN npm i -g @nestjs/cli

RUN mkdir -p /var/www/auth-api

WORKDIR /var/www/auth-api

ADD . /var/www/auth-api/
RUN pnpm install

EXPOSE 8004

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD pnpm run build && pnpm run start:dev

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD pnpm run build && pnpm run start:dev