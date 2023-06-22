FROM node:16.14.2-alpine as common-build-stage

RUN npm install -g pnpm
RUN npm i -g @nestjs/cli
RUN npm install -g concurrently

RUN mkdir -p /var/www/subscription-api

WORKDIR /var/www/subscription-api

ADD . /var/www/subscription-api/
RUN pnpm install

EXPOSE 8009

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD ["concurrently", "pnpm:start:dev", "pnpm:prisma:generate", "pnpm:prisma:migrate", "pnpm:prisma:seed"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD pnpm run build && pnpm run start:dev