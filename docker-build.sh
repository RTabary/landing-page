#!/bin/bash

# Script de build et test Docker local
# Usage: ./docker-build.sh

set -e

echo "🐳 Building Docker image..."
docker build -t baddummy:latest .

echo ""
echo "✅ Build successful!"
echo ""
echo "🚀 Starting container on port 8080..."
docker run -d -p 8080:80 --name baddummy-test baddummy:latest

echo ""
echo "✅ Container started!"
echo ""
echo "📍 Application accessible at: http://localhost:8080"
echo ""
echo "📊 Useful commands:"
echo "  - View logs:    docker logs baddummy-test"
echo "  - Stop:         docker stop baddummy-test"
echo "  - Remove:       docker rm baddummy-test"
echo "  - Clean all:    docker stop baddummy-test && docker rm baddummy-test"
