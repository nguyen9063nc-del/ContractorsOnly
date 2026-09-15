# Contractors Only

Marketing website for Contractors Only, built with [React Router](https://reactrouter.com) (framework mode) and deployed on Cloudflare Workers.

Pages: Home, Who we serve, Services, Equipment, Portfolio, About, and a Get-started/Contact page with an embedded Zoho intake form. Fully responsive with real breakpoints for desktop, tablet, and mobile (including a hamburger nav menu) — layouts reflow rather than just shrink.

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

`app/components/site/ZohoContractorForm.tsx` embeds the client's Zoho form (form name `ContractorWebsite`) via a React port of Zoho's JavaScript embed snippet — it auto-resizes the iframe to the form's content height via `postMessage`, so there's no internal scrollbar at any screen size.

**Known issue:** as of the last check, Zoho itself is returning "Form closed. Please contact your form administrator for further assistance." inside the iframe. That message comes from Zoho's servers, not this codebase — the embed, resize logic, and page layout are all working correctly. Re-open/reactivate the form in the Zoho Forms dashboard (forms.zohopublic.com, org `theonlycompany1`, form `ContractorWebsite`) to fix it.

## Structure

- `app/routes/` — pages (`app/routes.ts` defines the route table)
- `app/components/core/navigation/` — design system components (`Button`, `Icon`, `Tag`, `Tabs`, `Accordion`, `Eyebrow`)
- `app/components/site/` — header (with mobile menu), footer, dark hero band, carousels, and the Zoho embed
- `app/data/content.ts` — copy and structured content for every page
- `app/styles/tokens/` — design tokens (colors, type, spacing, shape, motion)
- `app/styles/responsive.css` — the grid/split/nav utility classes that drive the desktop/tablet/mobile breakpoints
- `public/assets/` — logo and property photography

## Business info baked into the site

- Phone: (425) 444-4514
- Email: hannguyen1@comcast.net
- Address: 14600 1st Ave S, Burien, WA 98168

## Known placeholders

- About page team photos and the "About" hero photo are gray placeholder slots (no photography supplied for the team yet).
- Equipment page: truck/van and mower units render as labeled placeholder tiles (no photos supplied for those units); trailer units use real fleet photos.
- Fonts (Archivo, IBM Plex Sans/Mono) load from Google Fonts as a substitution — see `app/styles/tokens/fonts.css`.
- Icons use [lucide-react](https://lucide.dev)'s `dynamic` import.
