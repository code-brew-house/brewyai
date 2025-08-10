# Production-optimized Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN yarn
# copy all files
COPY . .
cmd ["yarn", "dev", "--debug"]