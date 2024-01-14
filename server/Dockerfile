FROM node:16-alpine

WORKDIR /usr/src/app

COPY packa*.json .
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:docker"]