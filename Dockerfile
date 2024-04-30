FROM node:16-alpine

EXPOSE ${PORT}

COPY . /app
WORKDIR /app

RUN yarn install:all
RUN yarn build

CMD ["yarn", "deploy"]