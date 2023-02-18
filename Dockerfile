# Use node v16 as the base image
FROM node:16.19.1-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the files to the container
COPY . .

# Build the app
RUN yarn run build

# Expose the app port
EXPOSE 8080

# Start the app
CMD ["yarn", "run", "start"]
