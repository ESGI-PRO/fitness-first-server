FROM --platform=linux/amd64 node:18.15-alpine as common-build-stage

WORKDIR /var/www/gateway-api

COPY package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install

COPY . .

EXPOSE 8000

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV=development

CMD ["npm", "run", "start:dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV=production

CMD ["npm", "run", "build", "&&", "npm", "run", "start:dev"]