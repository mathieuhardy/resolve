
# Setup stage
from node:18  as develop-stage

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

# Build stage
FROM develop-stage as build-stage

RUN yarn build

# Production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]