FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY src ./src
COPY public ./public
COPY postcss.config.js .
COPY next.config.mjs .
COPY tsconfig.json .
COPY tailwind.config.ts .


CMD ["npm", "run", "dev"]
