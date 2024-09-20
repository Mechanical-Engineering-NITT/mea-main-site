FROM node:21-alpine AS base
ARG github_url

FROM base AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN apk --no-cache add git
RUN git clone --branch main ${github_url} ./
WORKDIR /app/web
RUN yarn
RUN yarn build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY ./.env ./
COPY --from=builder /app/web/.next/standalone ./
COPY --from=builder /app/web/.next/static ./.next/static

EXPOSE 3000
CMD node server.js