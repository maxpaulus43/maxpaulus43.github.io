# Project Structure

## Directory Organization

### `/app` - Next.js App Router
- **`/components`** - Reusable React components
- **`/blog`** - Blog pages with dynamic routing (`[slug]`)
- **`/portfolio`** - Portfolio pages with dynamic routing (`[slug]`)
- **`/now`** - Current activities page
- **`/skill`** - Skill-based filtering (`[skill]`)
- **`/tag`** - Tag-based filtering (`[tag]`)
- **`layout.tsx`** - Root layout with metadata
- **`page.tsx`** - Homepage
- **`globals.css`** - Global styles

### `/content` - Markdown Content
- **`/blog`** - Blog post markdown files
  - **`/draft`** - Draft posts not yet published
- **`/portfolio`** - Portfolio project descriptions
- **`/home`** - Homepage content (legacy)
- **`/now`** - Current activities content
- **`/timeline`** - Professional experience data (JSON)

### `/lib` - Utility Functions
- **`markdown-utils.ts`** - Markdown processing utilities
- **`blog.ts`** - Blog-specific data fetching
- **`portfolio.ts`** - Portfolio data fetching
- **`timeline.ts`** - Timeline data processing
- **`home.ts`** - Homepage data utilities
- **`now.ts`** - Now page data utilities

### `/public` - Static Assets
- **`/blog/images`** - Blog post images
- **`/portfolio/images`** - Portfolio project images
- **`.nojekyll`** - Disables Jekyll processing on GitHub Pages
- **`CNAME`** - Custom domain configuration

## Naming Conventions

### Files & Components
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Pages**: lowercase with brackets for dynamic routes (e.g., `[slug]`)
- **Utilities**: camelCase (e.g., `markdown-utils.ts`)
- **Content**: kebab-case for markdown files (e.g., `discovery-cycle.md`)

### Dynamic Routes
- **Blog**: `/blog/[slug]` maps to `/content/blog/{slug}.md`
- **Portfolio**: `/portfolio/[slug]` maps to `/content/portfolio/{slug}.md`
- **Skills**: `/skill/[skill]` for filtering by skill
- **Tags**: `/tag/[tag]` for filtering by tag

## Content Structure

### Markdown Frontmatter
All content files should include frontmatter with:
- `title` - Page/post title
- `description` - Meta description
- `lastUpdated` - Last modification date
- Additional fields as needed per content type

### Component Architecture
- **Layout.tsx** - Main site layout with navigation and footer
- **Modular components** - Each UI section as separate component
- **Client components** - Use `'use client'` directive when needed
- **Server components** - Default for data fetching and static content