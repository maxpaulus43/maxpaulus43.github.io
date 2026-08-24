---
title: Chefness
excerpt: An offline-first AI cooking companion built as a native React Native iOS app and installable PWA from one shared TypeScript codebase.
skills: ['React Native', 'Expo', 'TypeScript', 'iOS', 'PWA', 'OpenRouter', 'AI Agents', 'IndexedDB', 'AsyncStorage', 'tRPC', 'TanStack Query', 'Cloudflare']
duration: "April 2026 - Present"
location: "Personal Project"
links:
  - name: "Chefness Website"
    url: "https://chefness.org"
  - name: "Web App"
    url: "https://chefness.maxsdomain.org"
  - name: "React Native Branch"
    url: "https://github.com/maxpaulus43/chefness/tree/react-native"
---

## Your kitchen, remembered

Chefness is a personal AI cooking companion for planning meals, importing and saving recipes, remembering what I cooked, and generating suggestions shaped by dietary needs and preferences.

I built Chefness as a **native Expo and React Native iOS application** while retaining an installable **Progressive Web App**. Shared hooks, business logic, schemas, and data access support both surfaces, with platform-specific presentation and storage where native behavior matters.

## Local by design

Chefness has no traditional application backend and no account system. Recipes, chat sessions, cooking history, settings, and preferences stay on the device using AsyncStorage on iOS and IndexedDB on the web.

Users connect their own OpenRouter account through OAuth. Keys are kept in secure local storage on iOS, and model requests go directly to OpenRouter. This keeps the architecture small while giving users control over their model and data.

## Product capabilities

- Streaming conversations with an AI cooking assistant
- Vision prompts using food or ingredient photos
- Recipe extraction from conversations and supported recipe URLs
- Saved recipe collection with editing, search, and Markdown sharing
- AI-assisted recipe adaptation with a reviewable preview before saving
- Cooking history, ratings, notes, dietary restrictions, and AI memory
- Native iOS share extension for importing recipe URLs from other apps
- OpenRouter model discovery and filtering by cost, vision, and tool support

## One product, two interfaces

The iOS app uses Expo, React Native, native navigation, secure storage, and platform accessibility primitives. The PWA uses Vite, React, a service worker, and IndexedDB. A shared tRPC layer provides typed operations within the application without requiring a remote server.

The project has also included App Store preparation, native signing and entitlements, share-extension integration, keyboard and scrolling behavior, offline behavior, release runbooks, and accessibility work—the less-visible engineering that turns a prototype into a product.
