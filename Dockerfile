# Production-optimized Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production=false && \
    yarn cache clean

# Copy source code
COPY src/ ./src/
COPY public/ ./public/
COPY index.html tsconfig*.json vite.config.ts ./

# Set production environment
ENV NODE_ENV=production
ENV VITE_API_URL=${VITE_API_URL:-/api}

# Build application
RUN yarn build && \
    rm -rf node_modules src

# Production stage
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy optimized nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx config and add security
RUN rm /etc/nginx/conf.d/default.conf.dpkg-dist 2>/dev/null || true && \
    rm /usr/share/nginx/html/50x.html && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 644 /usr/share/nginx/html

# Run as non-root user
USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]