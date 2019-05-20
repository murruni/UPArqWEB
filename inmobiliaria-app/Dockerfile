FROM node:8
WORKDIR /app
ADD package.json /app
RUN npm install
COPY . /app
CMD node app.js
EXPOSE 8081