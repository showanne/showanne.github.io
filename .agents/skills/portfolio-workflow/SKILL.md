---
name: portfolio-workflow
description: Automated workflows and rules for managing Anne's Nuxt 3 portfolio website (showanne.github.io). Use this skill when modifying pages, adding portfolio items, generating static site output, or configuring contact email settings.
---

# Portfolio Workflow Guide

This skill provides step-by-step guidance for managing and developing the **showanne.github.io** Nuxt 3 portfolio application.

## 1. Project Overview
- Framework: Nuxt 3 (`<script setup lang="ts">`)
- Styling: Tailwind CSS
- Server API: Nitro server route (`server/api/contact.post.ts`)

## 2. Key Maintenance Tasks

### A. Adding a New Portfolio Project
1. Update project data in `pages/projects.vue` or `components/ProjectsSection.vue`.
2. Add assets into `public/` or `assets/` directory.
3. Ensure responsiveness (mobile, tablet, desktop breakpoints).

### B. Contact Form Setup
1. Duplicate `.env.sample` to `.env`.
2. Fill in `GMAIL_USER` and `GMAIL_APP_PASSWORD`.
3. Test API endpoint using Nitro server context (`/api/contact`).

### C. Build & Static Export
- Run `npm run generate` to pre-render static HTML pages into `.output/public`.
- Ensure all dynamic routes pre-render cleanly for GitHub Pages.
