#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Aegis-AI Azure Deployment Script"
echo "=========================================="

# Check if run as root
if [ "$EUID" -ne 0 ]; then
  echo "❌ Please run this script as root (sudo bash scripts/deploy-azure.sh)"
  exit 1
fi

# Determine the git repository directory
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

echo "📂 Working directory: $REPO_DIR"

# 1. Update OS Packages
echo "🔄 Updating OS packages..."
apt-get update && apt-get upgrade -y

# 2. Install Git if not installed
if ! command -v git &> /dev/null; then
  echo "📦 Installing git..."
  apt-get install -y git
fi

# 3. Install Docker if not installed
if ! command -v docker &> /dev/null; then
  echo "🐳 Installing Docker..."
  apt-get install -y apt-transport-https ca-certificates curl software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
  apt-get update
  apt-get install -y docker-ce docker-ce-cli containerd.io
  
  # Enable and start Docker service
  systemctl enable docker
  systemctl start docker
  echo "✅ Docker installed successfully."
fi

# 4. Install Docker Compose if not installed
if ! docker compose version &> /dev/null; then
  echo "🐳 Installing Docker Compose plugin..."
  apt-get install -y docker-compose-plugin
  echo "✅ Docker Compose installed successfully."
fi

# 5. Install Nginx if not installed
if ! command -v nginx &> /dev/null; then
  echo "🌐 Installing Nginx..."
  apt-get install -y nginx
  systemctl enable nginx
  systemctl start nginx
  echo "✅ Nginx installed successfully."
fi

# 6. Install Certbot (Let's Encrypt)
if ! command -v certbot &> /dev/null; then
  echo "🔒 Installing Certbot for SSL management..."
  apt-get install -y certbot python3-certbot-nginx
  echo "✅ Certbot installed successfully."
fi

# 7. Set up Nginx configuration
echo "🌐 Configuring Nginx reverse proxy..."
if [ -f "nginx.prod.conf" ]; then
  cp nginx.prod.conf /etc/nginx/sites-available/aegis
  # Create a symlink to sites-enabled if it doesn't exist
  ln -sf /etc/nginx/sites-available/aegis /etc/nginx/sites-enabled/default
  
  # Create directory for web challenges
  mkdir -p /var/www/html
  
  # Test and reload Nginx
  nginx -t
  systemctl reload nginx
  echo "✅ Nginx configured."
else
  echo "⚠️ nginx.prod.conf not found at root directory. Skipping Nginx config copy."
fi

# 8. Start Docker Compose Stack
echo "🚀 Building and launching Docker containers..."
if [ -f ".env.prod" ]; then
  echo "📝 Configuring production environment variables..."
  # Copy .env.prod to .env so docker compose picks it up by default
  cp .env.prod .env
  
  # Also copy it into Servers/.env and Clients/.env if needed by the builder
  cp .env.prod Servers/.env
  
  # Start the compose stack in detached mode
  docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
  
  echo "✅ Docker Compose services started."
  docker compose ps
else
  echo "❌ Error: .env.prod file not found. Please create it before running this script."
  exit 1
fi

echo "=========================================="
echo "🎉 Deployment Setup complete!"
echo "Next Steps to activate SSL (HTTPS):"
echo "1. Verify that your DNS record for app.axomify.co points to this VM's IP."
echo "2. Run this command to obtain and configure SSL certificate:"
echo "   sudo certbot --nginx -d app.axomify.co"
echo "3. Follow the certbot prompts. Once completed, certbot will modify"
echo "   Nginx to listen on port 443 with the certificates."
echo "=========================================="
