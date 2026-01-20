# ============================================
# Dependencies Stage
# ============================================
FROM node:20-alpine AS deps
WORKDIR /app
# Enable corepack (for managing package manager versions)
RUN corepack enable
# Copy package management files
COPY package.json pnpm-lock.yaml* ./
# Prefetch dependencies using cache mount
RUN - mount=type=cache,target=/root/.local/share/pnpm/store/v3 \
 pnpm fetch
# Install dependencies using cache mount (frozen lockfile, offline mode)
RUN - mount=type=cache,target=/root/.local/share/pnpm/store/v3 \
 pnpm install - frozen-lockfile - offline
# ============================================
# Build Stage
# ============================================
FROM node:20-alpine AS builder
WORKDIR /app
# Enable corepack
RUN corepack enable
# Copy node_modules from dependencies stage
COPY - from=deps /app/node_modules ./node_modules
# Copy all source code
COPY . .
# ============================================
# Build Arguments
# Only declare variables needed at build time
# ============================================
# NEXT_PUBLIC_* variables (will be embedded in client-side JavaScript)
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_PRICING_PATH
ARG NEXT_PUBLIC_OPTIMIZED_IMAGES
ARG NEXT_PUBLIC_LOGIN_MODE
ARG NEXT_PUBLIC_GITHUB_CLIENT_ID
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID
ARG NEXT_PUBLIC_TURNSTILE_SITE_KEY
ARG NEXT_PUBLIC_ENABLE_STRIPE
ARG NEXT_PUBLIC_DEFAULT_CURRENCY
ARG NEXT_PUBLIC_GOOGLE_ID
ARG NEXT_PUBLIC_PLAUSIBLE_DOMAIN
ARG NEXT_PUBLIC_PLAUSIBLE_SRC
ARG NEXT_PUBLIC_DISCORD_INVITE_URL
ARG NEXT_PUBLIC_AUTO_FILL_AI_PROVIDER
ARG NEXT_PUBLIC_AUTO_FILL_AI_MODEL_ID
ARG NEXT_PUBLIC_DAILY_AI_AUTO_FILL_LIMIT
ARG NEXT_PUBLIC_DAILY_SUBMIT_LIMIT
ARG NEXT_PUBLIC_DAILY_IMAGE_UPLOAD_LIMIT
# R2_PUBLIC_URL is needed by next.config.mjs for image remotePatterns
ARG R2_PUBLIC_URL
ARG R2_ACCOUNT_ID
ARG R2_ACCESS_KEY_ID
ARG R2_SECRET_ACCESS_KEY
ARG R2_BUCKET_NAME
# DATABASE_URL is needed for static site generation (SSG) at build time
ARG DATABASE_URL
# BETTER_AUTH
ARG BETTER_AUTH_SECRET
ARG BETTER_AUTH_GITHUB_CLIENT_SECRET
ARG GOOGLE_CLIENT_SECRET
# STRIPE
ARG STRIPE_SECRET_KEY
ARG STRIPE_PUBLISHABLE_KEY
ARG STRIPE_WEBHOOK_SECRET
ARG STRIPE_CUSTOMER_PORTAL_URL
# RESEND
ARG RESEND_API_KEY
ARG RESEND_AUDIENCE_ID
ARG ADMIN_EMAIL
ARG ADMIN_NAME
# UPSTASH
ARG UPSTASH_REDIS_REST_URL
ARG UPSTASH_REDIS_REST_TOKEN
# AI
ARG OPENROUTER_API_KEY
ARG FIRECRAWL_API_KEY
# PLAUSIBLE
ARG PLAUSIBLE_API_KEY
ARG PLAUSIBLE_URL
# DISCORD
ARG DISCORD_SUBMIT_WEBHOOK_URL
# ============================================
# Build Environment Variables
# ============================================
# Set NEXT_PUBLIC_* as environment variables so Next.js can embed them in the bundle
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV NEXT_PUBLIC_PRICING_PATH=${NEXT_PUBLIC_PRICING_PATH}
ENV NEXT_PUBLIC_OPTIMIZED_IMAGES=${NEXT_PUBLIC_OPTIMIZED_IMAGES}
ENV NEXT_PUBLIC_LOGIN_MODE=${NEXT_PUBLIC_LOGIN_MODE}
ENV NEXT_PUBLIC_GITHUB_CLIENT_ID=${NEXT_PUBLIC_GITHUB_CLIENT_ID}
ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_CLIENT_ID}
ENV NEXT_PUBLIC_TURNSTILE_SITE_KEY=${NEXT_PUBLIC_TURNSTILE_SITE_KEY}
ENV NEXT_PUBLIC_ENABLE_STRIPE=${NEXT_PUBLIC_ENABLE_STRIPE}
ENV NEXT_PUBLIC_DEFAULT_CURRENCY=${NEXT_PUBLIC_DEFAULT_CURRENCY}
ENV NEXT_PUBLIC_GOOGLE_ID=${NEXT_PUBLIC_GOOGLE_ID}
ENV NEXT_PUBLIC_PLAUSIBLE_DOMAIN=${NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
ENV NEXT_PUBLIC_PLAUSIBLE_SRC=${NEXT_PUBLIC_PLAUSIBLE_SRC}
ENV NEXT_PUBLIC_DISCORD_INVITE_URL=${NEXT_PUBLIC_DISCORD_INVITE_URL}
ENV NEXT_PUBLIC_AUTO_FILL_AI_PROVIDER=${NEXT_PUBLIC_AUTO_FILL_AI_PROVIDER}
ENV NEXT_PUBLIC_AUTO_FILL_AI_MODEL_ID=${NEXT_PUBLIC_AUTO_FILL_AI_MODEL_ID}
ENV NEXT_PUBLIC_DAILY_AI_AUTO_FILL_LIMIT=${NEXT_PUBLIC_DAILY_AI_AUTO_FILL_LIMIT}
ENV NEXT_PUBLIC_DAILY_SUBMIT_LIMIT=${NEXT_PUBLIC_DAILY_SUBMIT_LIMIT}
ENV NEXT_PUBLIC_DAILY_IMAGE_UPLOAD_LIMIT=${NEXT_PUBLIC_DAILY_IMAGE_UPLOAD_LIMIT}
# R2
ENV R2_PUBLIC_URL=${R2_PUBLIC_URL}
ENV R2_ACCOUNT_ID=${R2_ACCOUNT_ID}
ENV R2_ACCESS_KEY_ID=${R2_ACCESS_KEY_ID}
ENV R2_SECRET_ACCESS_KEY=${R2_SECRET_ACCESS_KEY}
ENV R2_BUCKET_NAME=${R2_BUCKET_NAME}
# DATABASE_URL for static site generation
ENV DATABASE_URL=${DATABASE_URL}
# BETTER_AUTH
ENV BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET}
ENV BETTER_AUTH_GITHUB_CLIENT_SECRET=${BETTER_AUTH_GITHUB_CLIENT_SECRET}
ENV GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}
# Stripe
ENV STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
ENV STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLISHABLE_KEY}
ENV STRIPE_WEBHOOK_SECRET=${STRIPE_WEBHOOK_SECRET}
ENV STRIPE_CUSTOMER_PORTAL_URL=${STRIPE_CUSTOMER_PORTAL_URL}
# RESEND
ENV RESEND_API_KEY=${RESEND_API_KEY}
ENV RESEND_AUDIENCE_ID=${RESEND_AUDIENCE_ID}
ENV ADMIN_EMAIL=${ADMIN_EMAIL}
ENV ADMIN_NAME=${ADMIN_NAME}
# UPSTASH
ENV UPSTASH_REDIS_REST_URL=${UPSTASH_REDIS_REST_URL}
ENV UPSTASH_REDIS_REST_TOKEN=${UPSTASH_REDIS_REST_TOKEN}
# AI
ENV OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
ENV FIRECRAWL_API_KEY=${FIRECRAWL_API_KEY}
# PLAUSIBLE
ENV PLAUSIBLE_API_KEY=${PLAUSIBLE_API_KEY}
ENV PLAUSIBLE_URL=${PLAUSIBLE_URL}
# DISCORD
ENV DISCORD_SUBMIT_WEBHOOK_URL=${DISCORD_SUBMIT_WEBHOOK_URL}
# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1
# Build the application
RUN - mount=type=cache,target=/root/.local/share/pnpm/store/v3 \
 pnpm build
# ============================================
# Runtime Stage
# ============================================
FROM node:20-alpine AS runner
WORKDIR /app
# ============================================
# No build arguments or environment variables needed here
# All runtime secrets will be injected by the container runtime (dokploy)
# Next.js standalone mode reads environment variables at runtime
# ============================================
# Set production environment
ENV NODE_ENV=production
# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1
# Create system user group and user (for secure execution)
RUN addgroup - system - gid 1001 nodejs
RUN adduser - system - uid 1001 nextjs
# Copy necessary files from build stage
COPY - from=builder /app/public ./public
COPY - from=builder - chown=nextjs:nodejs /app/.next/standalone ./
COPY - from=builder - chown=nextjs:nodejs /app/.next/static ./.next/static
# Switch to non-root user
USER nextjs
# Expose port
EXPOSE 3000
# Set port and hostname
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
# Start the application
CMD ["node", "server.js"]