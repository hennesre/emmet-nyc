# emmet.nyc

Personal website for emmet.nyc. Minimal editorial-style single-page site.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Motion (Framer Motion) for animations
- Deployed on Vercel

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Architecture
- `src/app/` — Next.js App Router (layout, page, globals)
- `src/components/` — all UI components (hero, projects, links, footer, etc.)
- `src/data/projects.ts` — project data array (acts as a simple CMS)

## Design System
- **Fonts:** Space Grotesk (headings), Inter (body), Space Mono (code/tags)
- **Colors:** warm off-white bg (#FAFAF8), terracotta accent (#C45D3E), warm grays
- **Layout:** single column, max-width 720px, generous vertical spacing

## Key Decisions
- No dark mode — the warm palette is intentional
- No nav bar — the page is short enough to scroll
- Animations use Motion's `whileInView` for scroll-triggered reveals
- SVG favicon via `icon.svg` in app directory (no .ico needed)
