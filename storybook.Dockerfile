FROM node:18-alpine

WORKDIR /app
# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./
RUN npm ci

COPY .storybook ./.storybook
COPY src ./src
COPY public ./public
COPY postcss.config.js .
COPY next.config.mjs .
COPY tsconfig.json .
COPY tailwind.config.ts .

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "storybook"]
