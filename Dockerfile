# Base image
FROM node:18-alpine AS base

# Install OpenSSL
RUN apk add --no-cache openssl

# Create app directory
WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

# Dependencies stage
FROM base AS dependencies

# Copy package.json and related files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Generate Prisma client - this is critical!
COPY prisma ./prisma
RUN npx prisma generate

# Build stage
FROM dependencies AS build

# Copy application code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM base AS production

# Set NODE_ENV
ENV NODE_ENV production

# Copy from build stage
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./prisma

# Generate Prisma client again in production to ensure it matches the environment
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]