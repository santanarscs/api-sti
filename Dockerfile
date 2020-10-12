FROM node:14-alpine as BUILDER

WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn build

FROM node:14-alpine
WORKDIR /app
COPY package.json /app
COPY --from=BUILDER /usr/src/app/dist/ .
RUN yarn --only=production


CMD node server.js
