# Copilot Instructions for Kirimy Documentation

## Project Overview

This is the official documentation site for **Kirimy** - a WhatsApp management platform that helps businesses manage multi-account messaging, automated AI agents, and customer service workflows. Built with Docusaurus 3.7.0, serving bilingual content (primarily Indonesian) at `docs.kirimy.id`.

## Architecture & Key Files

- **`docusaurus.config.js`**: Central configuration - site metadata, navbar, footer, deployment settings
- **`sidebars.js`**: Documentation structure defining 9 main categories (Introduction → Getting Started → Sessions → Contacts → Templates → Blasting → Reports → Chat → AI Agent → Tickets)
- **`docs/`**: Markdown content organized by feature area, following sidebar structure
- **`src/css/custom.css`**: Infima framework overrides with custom color scheme
- **`static/img/screenshots/`**: UI screenshots referenced in documentation

## Content Patterns & Conventions

### Frontmatter Structure

All docs use consistent frontmatter:

```markdown
---
id: kebab-case-id
title: User-Friendly Title
sidebar_position: 1
---
```

### Documentation Style

- **Language**: Mixed Indonesian/English (Indonesian for user-facing content, English for technical terms)
- **Screenshots**: Heavily screenshot-driven with images in `/static/img/screenshots/`
- **Structure**: Step-by-step tutorials with numbered lists and feature callouts
- **Callouts**: Use `> 🔐`, `> 🤖` etc. for important notes and tips

### File Naming

- Use kebab-case for file/folder names
- Match `sidebar_position` with logical user flow
- Group related features in directories (e.g., `ai-agent/`, `blast-report/`)

## Development Workflow

### Local Development

```bash
yarn start          # Development server with live reload
yarn build          # Production build to /build directory
yarn serve          # Serve built files locally
```

### Production Deployment

The site uses PM2 for production hosting:

- **`Makefile`**: Automated deployment pipeline (`make all` = pull → install → build → restart)
- **`ecosystem.config.js`**: PM2 configuration serving on port 3017
- **Build artifacts**: Generated in `/build` directory

### Key Commands

- `make all`: Full deployment pipeline for production
- `yarn clear`: Clear Docusaurus cache (use when config changes don't reflect)
- `yarn write-heading-ids`: Generate heading IDs for better linking

## Project-Specific Considerations

### Content Management

- Screenshots must be optimized and placed in `/static/img/screenshots/`
- Feature documentation should follow user journey (overview → create → manage → advanced)
- Indonesian UI terms should be consistent across all documentation

### Navigation Structure

The sidebar follows the Kirimy app workflow:

1. **Introduction** → **Getting Started**: Onboarding flow
2. **Sessions** → **Contacts**: Core setup
3. **Templates** → **Blasting**: Content creation and distribution
4. **AI Agent** → **Tickets**: Advanced automation features

### Integration Points

- Repository: `pendig/kirimy-docs` (GitHub)
- Live site: `docs.kirimy.id`
- Main app: `app.kirimy.id` (referenced in docs)
- No external APIs or complex build dependencies

When adding new features or updating documentation, maintain the step-by-step tutorial format with screenshots, preserve the Indonesian language style, and ensure sidebar positioning follows logical user progression.
