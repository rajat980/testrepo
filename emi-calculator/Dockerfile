# Use Node.js official image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["node", "emiCalculator.js"]
