FROM node:16.14.2-alpine as common-build-stage

RUN npm install -g pnpm
RUN npm i -g @nestjs/cli
RUN npm install -g concurrently

RUN mkdir -p /var/www/training-api

WORKDIR /var/www/training-api

ADD . /var/www/training-api/
RUN pnpm install

EXPOSE 8003

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD ["concurrently", "pnpm:start:dev", "pnpm:prisma:generate", "pnpm:prisma:migrate", "pnpm:prisma:seed"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD pnpm run build && pnpm run start:dev