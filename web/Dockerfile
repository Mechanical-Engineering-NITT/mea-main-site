FROM node:22.21.1-alpine AS base

FROM base AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY ./ ./
RUN yarn
RUN yarn add sharp
RUN yarn build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY ./.env ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD node server.js