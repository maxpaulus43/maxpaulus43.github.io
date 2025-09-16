# Technology Stack

## Framework & Runtime
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Static Export** configuration for GitHub Pages deployment

## Styling & UI
- **Tailwind CSS 4** for styling
- **@tailwindcss/typography** for markdown content styling
- **Font Awesome 6** for icons (CDN)
- Custom geometric background patterns

## Content Management
- **Markdown** files for blog posts and portfolio content
- **Gray Matter** for frontmatter parsing
- **Remark** with remark-html for markdown to HTML conversion
- JSON files for structured data (timeline experiences)

## Development Tools
- **TypeScript 5** with strict mode
- **ESLint 9** with Next.js config
- **PostCSS** for CSS processing

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build static export for production
npm run start        # Start production server (local testing)
npm run lint         # Run ESLint
```

### Key Configuration Notes
- Static export enabled (`output: "export"`)
- Image optimization disabled for static hosting
- Base path configurable for GitHub Pages
- Path aliases: `@/*` maps to project root

## Deployment
- **GitHub Actions** workflow for automated deployment
- **GitHub Pages** hosting with custom domain
- Static files output to `/out` directory