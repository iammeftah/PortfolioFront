# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files and build the app
COPY . ./
RUN npm run build

# Step 2: Serve the app
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
