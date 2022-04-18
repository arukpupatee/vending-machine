FROM node:16-alpine as build-stage

ARG BACKEND_API_URL

########## Build Stage ##########
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN REACT_APP_BACKEND_API_URL=$BACKEND_API_URL \
  yarn run build

########## Production Stage ##########
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]