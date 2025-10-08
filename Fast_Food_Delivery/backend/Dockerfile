# Backend - Node.js
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose cổng backend (ví dụ 4000)
EXPOSE 4000

CMD ["npm", "start"]
