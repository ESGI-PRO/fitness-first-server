FROM node:18.15-alpine as common-build-stage

RUN npm install -g pnpm & npm install -g @nestjs/cli

RUN mkdir -p /var/www/auth-api

WORKDIR /var/www/auth-api

COPY package.json pnpm-lock.yaml /var/www/auth-api/

RUN pnpm install

COPY . /var/www/auth-api

EXPOSE 8004

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD pnpm run build && pnpm run start:dev

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD pnpm run build && pnpm run start:dev