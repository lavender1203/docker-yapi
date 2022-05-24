FROM node:12-alpine
COPY repositories /etc/apk/repositories
COPY ["./yapi", "/app/yapi"]
WORKDIR /app/yapi/vendors 
RUN npm install --production --registry https://registry.npm.taobao.org
RUN npm run install-server

EXPOSE 3000 9090

