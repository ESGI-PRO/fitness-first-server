FROM node:18.15-alpine as common-build-stage

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install
RUN npm i -g @nestjs/cli

# COPY . .

EXPOSE 3002

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD ["pnpm", "run", "start:dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["pnpm", "run", "start:prod"]