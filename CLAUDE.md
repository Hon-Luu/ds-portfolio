# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

Professional portfolio website for Hon Luu — a Director-level Data & Analytics leader targeting Director/Head of Analytics roles in insurance and financial services. The site emphasizes leadership positioning (not IC data scientist), global APAC scope, and insurance domain depth.

## Commands

```
npm run dev       # local dev server (http://localhost:4321)
npm run build     # static build output to dist/
npm run preview   # preview production build locally
```

## Tech Stack

- **Framework:** Astro 4 — `output: 'static'` (GitHub Pages, no SSR ever)
- **Styling:** Tailwind CSS — no `darkMode` setting, no `dark:` classes. Palette: stone/white + teal-700 accent
- **Fonts:** Inter (sans), JetBrains Mono (mono) via Google Fonts
- **Contact form:** Formspree (fill in form ID in Contact.astro)
- **No dark mode** — light only, stone/white background throughout

## Architecture

Single-page site. `src/pages/index.astro` composes all sections in order:

```
Hero → About → Impact → Expertise → Experience → Certifications → Contact
```

`src/layouts/Layout.astro` is the HTML shell. It:
- Imports `src/styles/animations.css` globally
- Adds `class="js"` to `<html>` via inline script (enables CSS animations — required for scroll-reveal)
- Runs the global `IntersectionObserver` for `[data-reveal]` scroll-reveal

## Animation System

Two distinct animation systems coexist:

**1. Hero load animations** — CSS keyframe `.hero-item` class, fires on page load with staggered `animation-delay` inline styles.

**2. Scroll-reveal** — defined in `src/styles/animations.css`. Elements use `data-reveal="up|down|left|right|scale|fade|line"` and `data-delay="1–8"`. Hidden by default only when `html.js` class is present (JS loaded). The Layout observer adds `.revealed` class on intersection.

**3. `.tilt-card`** — 3D mouse-move tilt on Impact cards, driven by inline `<script>` in `Impact.astro`.

All animations respect `prefers-reduced-motion` — reset in `animations.css` and guarded with `window.matchMedia` in component scripts.

## Key Conventions

- **`@/` path alias** maps to `src/` (configured in tsconfig.json)
- **Section backgrounds alternate:** white sections (`bg-white` or none) and stone sections (`bg-stone-50`) — check neighbours before changing
- **Section IDs** match Nav anchor links: `#about`, `#impact`, `#expertise`, `#experience`, `#certifications`, `#contact`
- **Teal accent** is always `teal-700` (text, borders, dots, bars) — do not use other teal shades for primary accents
- **Category/label style:** `text-xs font-mono uppercase tracking-widest text-teal-700`
- **Content data** (jobs, stats, initiatives, skills) is defined as frontmatter arrays at the top of each section component — not in separate data files

## Pending TODOs

- `Contact.astro`: Replace `YOUR_FORM_ID` with real Formspree endpoint
- `Certifications.astro`: Replace placeholder cert cards with real certifications
- `public/resume.pdf`: Add actual CV file (not yet present)
