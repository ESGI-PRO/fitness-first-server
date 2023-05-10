FROM node:18.15-alpine as common-build-stage

RUN npm install -g pnpm
RUN npm i -g @nestjs/cli

RUN mkdir -p /var/www/nutrition-api

WORKDIR /var/www/nutrition-api

ADD . /var/www/nutrition-api/
RUN pnpm install
RUN npx prisma generate

EXPOSE 8001

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD pnpm run start:dev

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD pnpm run build && pnpm run start:dev