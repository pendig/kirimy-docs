# Makefile untuk pull, build, dan restart Docusaurus dengan PM2

.PHONY: all pull install build restart pm2-restart

BRANCH = main
PORT = 3017
APP_NAME = docusaurus-site

all: pull install build restart

pull:
	@echo "📥 Menarik pembaruan dari repository..."
	git pull origin $(BRANCH)

install:
	@echo "📦 Menginstal dependensi..."
	npm install

build:
	@echo "🏗️  Membangun situs Docusaurus..."
	npm run build

restart:
	@echo "🔄 Memulai ulang aplikasi dengan PM2..."
	pm2 delete $(APP_NAME) || true
	pm2 start ecosystem.config.js --only $(APP_NAME) --env production
	pm2 save
