# Contractors Only

Marketing website for Contractors Only, built with [React Router](https://reactrouter.com) (framework mode) and deployed on Cloudflare Workers.

Pages: Home, Services, Equipment, Portfolio, About, and a Get-started/Contact page with an embedded Zoho intake form. Fully responsive with real breakpoints for desktop, tablet, and mobile (including a hamburger nav menu) — layouts reflow rather than just shrink.

## Develop

```sh
npm install
npm run dev
```

The dev server opens your browser automatically and hot-reloads on changes.

## Typecheck

```sh
npm run typecheck
```

## Build & deploy

```sh
npm run build
npm run deploy
```

`npm run deploy` builds the site and runs `wrangler deploy`. You'll need to be logged in via `npx wrangler login` and update the `name` in `wrangler.jsonc` if you want a different Worker name than `contractors-only`.

## Contact form

`app/components/site/ZohoContractorForm.tsx` embeds the client's Zoho form (form name `ContractorWebsite`) via a React port of Zoho's JavaScript embed snippet — it auto-resizes the iframe to the form's content height via `postMessage`, so there's no internal scrollbar at any screen size. It only mounts the iframe once the form's container scrolls near the viewport (`IntersectionObserver`, 600px margin), since Zoho's JS/CSS is well over 1MB and has no reason to load on any other page.

**Known issue:** as of the last check, Zoho itself is returning "Form closed. Please contact your form administrator for further assistance." inside the iframe. That message comes from Zoho's servers, not this codebase — the embed, resize logic, and page layout are all working correctly. Re-open/reactivate the form in the Zoho Forms dashboard (forms.zohopublic.com, org `theonlycompany1`, form `ContractorWebsite`) to fix it.

## Structure

- `app/routes/` — pages (`app/routes.ts` defines the route table)
- `app/components/core/` and `app/components/navigation/` — design system components actually used by the pages (`Button`, `Icon`, `IconButton`, `Eyebrow`)
- `app/components/site/` — header (with mobile menu), footer, dark hero band, carousels, and the Zoho embed
- `app/data/content.ts` — copy and structured content for every page
- `app/data/images.generated.ts` — **generated**, do not hand-edit; maps logical photo names to their optimized, content-hashed WebP URLs (see Performance below)
- `app/styles/tokens/` — design tokens (colors, type, spacing, shape, motion, self-hosted fonts)
- `app/styles/responsive.css` — the grid/split/nav utility classes that drive the desktop/tablet/mobile breakpoints
- `public/assets/` — optimized, deployed images (generated — see below)
- `public/fonts/` — self-hosted woff2 files
- `source-assets/` — original full-resolution photos/logo (not deployed; the input to `scripts/optimize-images.mjs`)
- `scripts/optimize-images.mjs` — resizes + compresses `source-assets/` into WebP variants in `public/assets/`, content-hashes the filenames, and regenerates `app/data/images.generated.ts`

## Performance

The site was audited and optimized for load speed (images, fonts, third-party scripts, caching, layout shift). Summary of what changed and why:

- **Images**: originals were shipped at full camera resolution (up to 5712×4284, several 1-2.7MB each — ~17MB total across photos + logo). `scripts/optimize-images.mjs` (`npm run optimize-images`) resizes every photo to two WebP variants (700w "tile" for grid/thumbnail use, 1600w "full" for hero/large use, quality 76-78) and the logo to a single 3x-retina WebP, hashing each output filename from its own content. Hero/closing-band images use `srcSet`/`sizes` so phones fetch the smaller variant. A byte-identical duplicate photo (`office-meeting-room.jpg` == `conference-room.jpg`) was deduped to one source. Re-run `npm run optimize-images` after dropping new files into `source-assets/` (requires the `sharp` devDependency, already installed).
- **LCP / priority**: each page's actual hero image is `loading="eager"` + `fetchPriority="high"`; the Home page additionally gets a `<link rel="preload" as="image">` for its first hero photo. Every other image on every page (closing CTAs, grids, fleet tiles, gallery shots) is `loading="lazy"`.
- **Layout shift**: the hero carousel and work-gallery components used to mount (and eagerly fetch) every slide at once; now only the visible/visited slide(s) mount, and all images carry `width`/`height` (or `aspect-ratio`, for the logo) so the browser reserves the right box before the file arrives.
- **Fonts**: the Google Fonts `@import` pulled 4 Archivo weights, 4 IBM Plex Sans weights, and all of IBM Plex Mono — but grepping every `fontWeight` in the app showed only Archivo 600/700 and IBM Plex Sans 400 are ever actually applied; Mono isn't used anywhere. Trimmed to just those, downloaded once, and self-hosted from `public/fonts/` with `font-display: swap` and a `<link rel="preload">` per file — no more third-party font request at all.
- **Third-party scripts**: the Zoho contact form (see above) is the only one left, and it's the one requirement of the page (lead capture) — deferred via `IntersectionObserver` rather than removed.
- **JS**: enabled React Router's `future.v8_splitRouteModules` (splits each route's loader/action code from its component code) in `react-router.config.ts`. CSS/JS minification was already handled by Vite's production build; verified in the built output rather than assumed.
- **Caching**: `public/_headers` gives everything under `/assets/` (Vite's hashed JS/CSS output and the hashed image/logo files above) a one-year immutable cache, since a changed file always gets a new filename. Self-hosted fonts get the same treatment. The one non-hashed file (`logo-mark.png`, the favicon) gets a short revalidated cache instead.

See the end-of-task performance report (before/after Lighthouse numbers) in the PR/commit history for this change for full metrics.

## Business info baked into the site

- Phone: (425) 444-4514
- Email: hannguyen1@comcast.net
- Address: 14600 1st Ave S, Burien, WA 98168

## Known placeholders

- About page team photos and the "About" hero photo are gray placeholder slots (no photography supplied for the team yet).
- Equipment page: truck/van and mower units render as labeled placeholder tiles (no photos supplied for those units); trailer units use real fleet photos.
- Icons use [lucide-react](https://lucide.dev)'s `dynamic` import (bundled, not a runtime CDN fetch).
