FROM node:latest

WORKDIR /app
COPY . .

ENTRYPOINT ["npm", "start"]