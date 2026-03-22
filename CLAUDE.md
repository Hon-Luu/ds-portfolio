# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

Professional portfolio website for a senior data scientist (15 years experience). Goals: job search, freelance/consulting, and personal brand. The site must serve recruiters, clients, and the broader DS community simultaneously.

## Tech Stack

- **Framework:** Astro (static output — required for GitHub Pages)
- **Styling:** Tailwind CSS with `dark:` variant classes
- **Deployment:** GitHub Pages (static files only — no server-side runtime)
- **Contact form:** Formspree (handles form submission without a backend)
- **Analytics:** Google Analytics or Plausible (to be added via script tag)

## Design Direction

- **Style:** Clean & minimal — generous whitespace, muted palette, typography-driven
- **Theme:** Dark/light mode toggle, preference persisted in `localStorage`
- **Audience:** Recruiters and clients first, then peers — professional over clever

## Site Sections (in order)

1. **Hero** — Name, title, tagline, CTA buttons (e.g. View Projects, Download Resume)
2. **Projects** — Most important section. Cards with title, description, tools/stack used, and links (GitHub, live demo, case study)
3. **Skills** — Languages (Python, SQL, R, etc.), tools, frameworks — grouped by category
4. **Experience** — Timeline-style work history + button to download resume PDF
5. **About** — Personal story and professional philosophy
6. **Contact** — Form powered by Formspree; no backend required

## Key Decisions & Constraints

- **Static only:** No Next.js API routes, no SSR. Astro's static output mode (`output: 'static'`) must be used. Everything must work as flat HTML/CSS/JS files.
- **Resume PDF:** Stored in `public/` and linked with an HTML `download` attribute — no dynamic generation.
- **Contact form:** Must use Formspree or equivalent service. Do not introduce a backend or serverless function for this.
- **Dark mode:** Implemented via Tailwind's `class` strategy (not `media`), toggled by JS, stored in `localStorage` to avoid flash on reload.
- **Projects are the priority:** If trade-offs arise between sections, invest design and content depth in Projects first.

## Commands

To be filled in after scaffolding. Expected commands will follow Astro conventions:

```
npm run dev       # local dev server
npm run build     # static build output to dist/
npm run preview   # preview production build locally
```

## File Structure

To be updated after scaffolding. Expected Astro conventions:

```
src/
  components/    # Reusable Astro/UI components
  layouts/       # Page shell with nav, footer, theme toggle
  pages/         # index.astro (single-page or multi-page)
  content/       # Project and experience data (Markdown or JSON)
public/
  resume.pdf     # Downloadable CV
  assets/        # Images, favicon, etc.
```
