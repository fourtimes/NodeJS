FROM node:12.18.1
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
CMD [ "node", "index.js" ]
