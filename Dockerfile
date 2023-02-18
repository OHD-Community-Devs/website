# Use node v16 as the base image
FROM node:16.19.1-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the yarn.lock files to the container
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false
RUN yarn global add nuxi@3.2.0
ENV PATH="${PATH}:/root/.yarn/bin:/root/.config/yarn/global/node_modules/.bin"

# Copy the rest of the files to the container
COPY . .

# Build the app
RUN yarn run build

# Expose the app port
EXPOSE 8080

# Start the app
CMD ["yarn", "run", "start"]
