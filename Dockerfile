FROM node:10.15-alpine

EXPOSE 3000

ENV NODE_ENV production

RUN mkdir -p /usr/src/app && \
    mkdir -p /usr/src/app/src && \
    mkdir -p /usr/src/app/node_modules && \
    chown node:node -R /usr/src/app

WORKDIR /usr/src/app

USER node

COPY package*.json ./

RUN npm install --production

COPY ./src/* ./src/

ENTRYPOINT ["node", "src/index.js"]
