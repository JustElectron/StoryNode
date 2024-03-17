FROM node:21.7.1-slim as dev

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init procps
COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node .eslintrc.js nest-cli.json openapi.yaml tsconfig*.json ./

COPY --chown=node:node . .

CMD [ "dumb-init", "npm", "run", "start:dev" ]