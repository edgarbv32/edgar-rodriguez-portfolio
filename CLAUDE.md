# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio for Edgar Yarib Rodríguez Carrasco (Software Developer Jr), built with React 19 + Vite + Tailwind CSS v4 + Framer Motion. Content and comments are in Spanish; keep new copy consistent with that.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # oxlint (rules in .oxlintrc.json)
```

There is no test suite configured in this repo.

## Architecture

- `src/main.jsx` mounts `App` into `#root` (defined in `index.html`).
- `src/App.jsx` is the entire page: it stacks `Background` and then, in order, `Navbar`, `Hero`, `Experience`, `Education`, `Projects`, `Stack`, `Contact`, `Footer` inside one scrolling `<main>`. There is no router — the site is one long scroll page and navigation is done via anchor links (e.g. `#proyectos`) to section `id`s.
- `src/components/layout/` — page chrome used once: `Background` (fixed full-viewport gradient/shader background sitting behind everything via `-z-10`), `Navbar`, `Footer`.
- `src/components/sections/` — one component per page section (`Hero`, `Experience`, `Education`, `Projects`, `Stack`, `Contact`, `About`). Content (skills, jobs, projects, tags) is defined as local data arrays/objects at the top of each section file, not fetched or pulled from a CMS — edit those arrays directly to change copy.
- `src/components/hero/` — hero-only subcomponents (e.g. `MobileHeroCarousel`, shown only on small screens as a counterpart to the desktop-only capabilities panel in `Hero.jsx`).
- `src/components/reactbits/` — reusable visual/animation primitives adapted from reactbits.dev (`GradientBlinds`, `Carousel`, `MagicBento`, `PillNav`, `RotatingText`, `ScrollStack`), each paired with its own co-located `.css` file. These are generic UI effects, not page-specific — prefer reusing/extending them over adding new animation libraries.
- Styling is Tailwind utility classes inline in JSX (dark, "glass UI" aesthetic: indigo/violet accents, translucent white borders like `border-white/10`, backgrounds like `bg-white/[0.035]`). `src/index.css` only holds global resets, scrollbar styling, font imports, and the `prefers-reduced-motion` block — new component styling should stay in JSX via Tailwind classes or in a component's own `.css` file (reactbits pattern), not appended to `index.css`.
- Static assets served as-is (CV PDF, favicon, images) live in `public/`; assets imported into JSX live in `src/assets/`.
