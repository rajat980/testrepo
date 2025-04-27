# Use official Node.js LTS base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application code
COPY app.js .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
