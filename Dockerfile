## Builder stage
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --frozen-lockfile # Or yarn install/pnpm install
RUN mkdir -p /app/.next/cache && chmod -R 777 /app/.next/cache
COPY . .
RUN npm run build

# Runner stage
FROM node:24-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]