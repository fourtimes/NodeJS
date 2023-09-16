FROM node
WORKDIR  /webdata
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node","index.js"]

################################
# docker create volume ashli
# docker volume ls
# docker build -t one .
# docker run -d -it -p 2001:2000 --name demo -v ashli:/webdata one

# use the url in the browser - localhost:2001
################################
