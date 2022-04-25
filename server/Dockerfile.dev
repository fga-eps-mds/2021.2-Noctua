
FROM node:lts

WORKDIR /app

COPY package*.json yarn.lock  /app/

RUN yarn 

COPY ./ /app/
