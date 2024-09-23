FROM node:18.8-alpine as base
ARG github_url

FROM base as builder
WORKDIR /app
RUN apk --no-cache add git
RUN git clone --branch main ${github_url} ./
WORKDIR /app/cms
RUN yarn install
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production

FROM base as runner
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
WORKDIR /app
COPY .env ./
COPY --from=builder /app/cms/node_modules ./node_modules
COPY --from=builder /app/cms/dist ./dist
COPY --from=builder /app/cms/build ./build

EXPOSE 3001
CMD node dist/server.js
