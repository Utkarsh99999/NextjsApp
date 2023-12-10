# Use an official Node.js runtime as a base image with Node.js version 16.20.0
FROM node:16.20.0-alpine

# Set the working directory inside the container
WORKDIR /usr/src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
