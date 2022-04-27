FROM node:16.14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 8080

CMD [ "npm", "run", "dev" ]