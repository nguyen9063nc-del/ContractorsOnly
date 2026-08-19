# Contractors Only

Marketing website for Contractors Only, built with [React Router](https://reactrouter.com) (framework mode) and deployed on Cloudflare Workers.

Implements the pages, components, and design tokens from the supplied Contractors Only design system: Home, Who we serve, Services (interior/exterior/property preparation), Portfolio, About, and a working Get started/contact form.

## Develop

```sh
npm install
npm run dev
```

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

`app/routes/contact.tsx` validates and accepts submissions, but does **not** send them anywhere yet — there's a `TODO` at the top of its `action` function. To wire up real delivery, pick one:

- **Email via [Resend](https://resend.com):** call their API from the action using `context.cloudflare.env` for the API key (set with `npx wrangler secret put RESEND_API_KEY`).
- **A hosted form backend** (Formspree, Basin, etc.): `fetch` the submission to their endpoint instead of handling it locally.
- **Cloudflare Email Routing / a webhook / a CRM** — whatever fits your stack.

Uploaded photos/files are currently read but discarded (no storage is configured — Cloudflare R2 is a natural fit if you want to keep them).

## Structure

- `app/routes/` — pages (`app/routes.ts` defines the route table)
- `app/components/core|forms|navigation|feedback|patterns/` — design system components
- `app/components/site/` — header, footer, and page-chrome pieces
- `app/data/content.ts` — copy and structured content pulled from the design system
- `app/styles/tokens/` — design tokens (colors, type, spacing, shape, motion) ported from the design system's `tokens/*.css`
- `public/assets/` — logo and placeholder photography from the design system

## Known placeholders

Carried over from the design system as-is:

- Photography is the design system's placeholder set (`public/assets/photos/`) — swap in real property photos.
- Turnaround figures on Who we serve are estimates, not commitments.
- Fonts (Archivo, IBM Plex Sans/Mono) are loaded from Google Fonts as a substitution — see `app/styles/tokens/fonts.css`.
- Icons use [lucide-react](https://lucide.dev)'s `dynamic` import, matching the design system's Lucide icon choice.
