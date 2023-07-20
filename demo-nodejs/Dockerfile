FROM node:14-alpine 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]



# run the below command for executing the terminal
# docker run -d -p 5000:8080 --name (con-id) (img-id)

# after creating the docker container, go to the browser and executing the below command
# localhost:5000