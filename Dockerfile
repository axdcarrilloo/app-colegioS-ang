FROM node:18-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . /app
RUN npm run build

## Stage - Etapa#2
FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/app-colegio-ang /var/www/app/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]