FROM node:18-alpine

WORKDIR /app

RUN apt-get update

COPY package.json ./
COPY yarn.lock ./

COPY ./ ./

RUN yarn

CMD ["yarn", "start:dev"]