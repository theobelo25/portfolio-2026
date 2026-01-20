# Stage 1: Install dependencies and build the application
FROM node:24-alpine AS builder
WORKDIR /app
ARG NODE_ENV=production

# Copy necessary files
COPY package.json yarn.lock* pnpm-lock.yaml* bun.lockb* ./
# Install dependencies
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
    elif [ -f bun.lockb ]; then bun install --frozen-lockfile; \
    else npm install; fi

COPY . .

# Set output to 'standalone' to create a minimal production image
ENV NEXT_OUTPUT=standalone

RUN npm run build

# Stage 2: Run the application in a minimal environment
FROM node:20-alpine AS runner
WORKDIR /app

# Copy the standalone application from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

# Set the correct port and start the application
ENV PORT=3000
CMD ["npm", "start"]