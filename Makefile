# Makefile for automating pull, build, and PM2 restart for Docusaurus

.PHONY: all pull install build restart

BRANCH = main
APP_NAME = docusaurus-site

all: pull install build restart

pull:
	@echo "📥 Pulling latest code from the '$(BRANCH)' branch..."
	git pull origin $(BRANCH)

install:
	@echo "📦 Installing dependencies..."
	npm install --loglevel=error

build:
	@echo "🏗️  Building the Docusaurus site..."
	npm run build

restart:
	@echo "🔄 Restarting the PM2 process..."
	# Delete the existing PM2 process if it exists
	-@pm2 delete $(APP_NAME)
	# Start the application using the ecosystem configuration
	pm2 start ecosystem.config.js --only $(APP_NAME) --env production
	# Save the PM2 process list for startup
	pm2 save
