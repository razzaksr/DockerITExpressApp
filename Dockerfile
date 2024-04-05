# Use the official Node.js image as a base image
FROM node:latest
# Set the working directory in the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install app dependencies
RUN npm install
RUN npm install -g nodemon
# Copy the rest of the application code to the container
COPY . .
# Expose port 1000 for the Express.js app
EXPOSE 1234
# Command to run the application
CMD ["nodemon", "index.js"]
