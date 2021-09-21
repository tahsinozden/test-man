FROM node:latest

WORKDIR /app
COPY src src
COPY public public
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

RUN npm install
ENTRYPOINT ["npm", "start"]