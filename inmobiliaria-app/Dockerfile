FROM node:8
WORKDIR /app
ADD package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8081
