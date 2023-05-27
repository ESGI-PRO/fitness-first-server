FROM node:18.15-alpine as common-build-stage

RUN npm install -g pnpm
RUN npm i -g @nestjs/cli

RUN mkdir -p /var/www/mailer-api

WORKDIR /var/www/mailer-api

COPY package.json pnpm-lock.yaml /var/www/mailer-api/

# RUN pnpm install

COPY . /var/www/mailer-api

EXPOSE 8008

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD pnpm run start:dev

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD pnpm run build && pnpm run start:dev