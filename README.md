# Contractors Only

Marketing site for Contractors Only — *"One call does it all."*

Built from the **Contractors Only Design System** as a fully prerendered static
site, deployed to Cloudflare Pages.

- **React Router 8.4** (framework mode) · **React 19.3** · **Vite 8.3**
- `ssr: false` + `prerender` — every route is rendered to HTML at build time and
  served straight off the CDN. No runtime server, no cold start.

## Getting started

```bash
npm install
npm run dev          # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build → `build/client` |
| `npm run preview` | Serve the built site locally |
| `npm run typecheck` | Route typegen + `tsc` |
| `npm run images` | Re-encode `source-assets/` → `public/img/` (see below) |
| `npm run fonts` | Re-vendor the webfonts into `public/fonts/` |

## Deploying to Cloudflare Pages

Connect the repo in the Cloudflare dashboard and set:

| Setting | Value |
| --- | --- |
| Framework preset | **None** (React Router is not a preset) |
| Build command | `npm run build` |
| Build output directory | `build/client` |

**Node version matters.** React Router 8 requires Node ≥ 22.22.0, and the Pages
v3 build image defaults to a lower version. `.nvmrc` pins `22.22.0` and Pages
reads it — do not delete it. The v3 image ignores `package.json` `engines`.

Set `SITE_URL` as a build environment variable (e.g.
`https://contractorsonlyusa.com`) so the generated `sitemap.xml` and
`robots.txt` carry the right origin. It defaults to `contractorsonlyusa.com`.

> Cloudflare now steers new projects toward Workers Static Assets rather than
> Pages, and there is no official Pages guide for React Router. A fully static
> prerendered build like this one works fine on Pages. If you ever need
> server-rendered routes, move to Workers — SSR on Pages is undocumented for v8.

### What the build emits

`react-router.config.ts` has a `buildEnd` hook that, after prerendering:

- copies `404/index.html` → **`404.html`**, because Pages only looks for a
  top-level `404.html` when serving a miss. Without it, Pages falls back to SPA
  behaviour and answers **200** for every bad URL — a soft 404 for search engines.
- generates **`sitemap.xml`** and **`robots.txt`** from the same route list that
  drives prerendering, so the two cannot drift apart.

`public/_headers` sets caching: hashed assets, fonts and images are `immutable`
for a year; HTML and `.data` payloads must revalidate so a deploy goes live
immediately.

## Layout

```
app/
  root.tsx              Document shell, font preloads, error boundary
  routes.ts             Route table
  routes/               One file per page
  components/
    Photo.tsx           Responsive <picture> over the generated image manifest
    Icon.tsx            lucide-react icon map
    site/               Header, Footer, Band, Section, Tile, ContactForm…
  data/                 Page content, transcribed from the design templates
  styles/
    contractors-only.css  The design system handoff stylesheet — VERBATIM, do not edit
    site.css              Only what the handoff ships no class for, plus noted deviations
    fonts.css             Generated: self-hosted @font-face
scripts/
  optimize-images.mjs   source-assets/ → public/img/ + images.generated.ts
  fetch-fonts.mjs       Google Fonts → public/fonts/ + styles/fonts.css
source-assets/          Full-resolution originals (not served, gitignored)
```

## Performance notes

Decisions worth knowing about before changing them:

- **Images are built ahead of time, not at request time.** `npm run images`
  re-encodes every photo to AVIF + WebP across a width ladder and writes
  `app/data/images.generated.ts` with intrinsic dimensions and a dominant
  colour. `Photo` uses those to set `width`/`height` and a background colour, so
  boxes are reserved before bytes arrive and layout never shifts. Output is
  committed so the Pages build never needs `sharp`.
  - 47.9 MB of source JPEG → the largest single file any visitor downloads is
    ~125 KB. Quality drops on the wider rungs, where per-pixel detail is least
    visible.

### Re-encoding images

`public/img/` (~31 MB, 678 files) **is committed**. `source-assets/` (~51 MB of
full-resolution originals) **is not** — it is gitignored, because nothing in the
build or the deployed site reads it.

That split is deliberate:

- The encoded output is *smaller than its own source*, so generating at build
  time would mean committing 51 MB of originals instead of 31 MB of
  derivatives — a bigger repo, plus ~3.5 min of build time on every deploy, plus
  a `sharp`/libvips dependency on Cloudflare's build image, which is not
  preinstalled there and has known failure modes.
- Encoding is byte-deterministic, so re-running the script with unchanged
  sources produces identical files and adds nothing to git history.
- Cloudflare Pages deduplicates assets by content hash, so redeploying
  unchanged images costs nothing. 678 files is well under the 20,000-file cap.
- **Do not move these to Git LFS.** Pages does not resolve LFS pointers and
  lists LFS as a cause of clone failure — you would deploy broken images.

To change the photography:

1. Restore `source-assets/` from the **Contractors Only Design System** zip
   (`assets/photos/` → `source-assets/photos/`, `assets/logo-*.png` →
   `source-assets/logo/`).
2. Add or replace files there.
3. `npm run images` — rewrites `public/img/` and regenerates
   `app/data/images.generated.ts` and `app/data/logo.generated.ts`.
4. Commit the changed files under `public/img/`.
- **Fonts are self-hosted.** The design system ships `tokens/fonts.css` as an
  `@import` from `fonts.googleapis.com`; that is a third-party handshake on the
  critical path and a render-blocking stylesheet. `scripts/fetch-fonts.mjs`
  vendors the latin/latin-ext woff2 files locally. Only the two faces used above
  the fold are preloaded.
- **Icons are imported, not fetched.** The design system's `Icon` component
  pulls each glyph from unpkg at runtime. `app/components/Icon.tsx` maps the same
  names onto `lucide-react` components so they are tree-shaken and inlined.
- **One `priority` image per page.** Each route preloads only its hero via
  `photoPreload`; everything else is `loading="lazy"`. Marking more than one
  defeats the point.

## Keeping the design honest

The conformance tooling lives in a **separate repo: `design-script`**. It reads
the per-element values out of a design system's templates and asserts the built
site against them.

```bash
cd ../design-script
npm run check -- --baseline baselines/contractors-only.json
```

The baseline for this site is `baselines/contractors-only.json` in that repo; its
`dist` points back here at `build/client`, so build first.

### The one thing to remember

A design system hands you a spec, a stylesheet and rendered templates. Only the
**templates** say which element gets which value — the other two give you a
vocabulary, and their examples can disagree with the design. Every sizing bug in
this build came from filling that gap by judgement:

| Role | Design templates | This build, before the fix |
| --- | --- | --- |
| body 17–20px | 88 uses | 61 |
| caption 15–17px | 55 | 276 |
| item-name 19–23px | 10 | 87 |

Body copy was 2px small everywhere, tile titles 2px large, and the fleet grid ran
at 23px where the design said 64px. **When the stylesheet and the templates
disagree, the templates win.**

## Editing styles

`app/styles/contractors-only.css` is the design system's handoff stylesheet and is
used **verbatim** — treat it as vendored. Put changes in `site.css`, which covers
only surfaces the handoff has no class for, and carries a comment on every
deliberate deviation.

Two things in `site.css` exist because the handoff's vocabulary is narrower than
the design's, and are load-bearing:

- `.title-body` / `.body--muted` — the design uses body-size uppercase titles and
  body-size muted copy; the handoff has neither, so these compose its variables.
- `.grid--gap-tile` / `.grid--gap-col` — the handoff keys gap to column count, the
  design varies it per section.

One more, easy to trip over: `.tile__media` needs `height: auto`. Our `<img>`
carries `width`/`height` attributes for CLS, and those map to a presentational
height that stops `aspect-ratio` applying. Without it every image renders at full
intrinsic height.
