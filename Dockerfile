# Use official nginx image as base
FROM nginx:alpine

# Copy the static site content to nginx html folder
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80
