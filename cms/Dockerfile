FROM node:18.8-alpine as base
ARG github_url

FROM base as builder
WORKDIR /app
COPY ./ ./
RUN yarn install
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production

FROM base as runner
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
WORKDIR /app
COPY .env ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build

EXPOSE 3001
CMD node dist/server.js
