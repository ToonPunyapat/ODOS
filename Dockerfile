#dockerfile ในกรณีที่ใช้ docker ที่ไม่ใช่ docker-compose

# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose port and run server
EXPOSE 3000
CMD ["node", "server.js"]
