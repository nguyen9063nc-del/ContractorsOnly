import { copyFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Config } from "@react-router/dev/config";

/**
 * Canonical origin, used for the sitemap and canonical tags.
 * Override per environment with SITE_URL (Cloudflare Pages env var).
 */
const SITE_URL = (process.env.SITE_URL ?? "https://contractorsonlyusa.com").replace(/\/$/, "");

/** Routes to prerender. Also drives the generated sitemap. */
const ROUTES = [
  "/",
  "/services",
  "/who-we-help",
  "/equipment",
  "/portfolio",
  "/about",
  "/contact",
];

export default {
  // No runtime server: every route is rendered to static HTML at build time and
  // served straight off Cloudflare's CDN. Marketing pages have no per-request
  // data, so this buys the best possible TTFB with no worker cold start.
  ssr: false,

  // `true` would pick up every static path automatically, but listing them makes
  // the build fail loudly if a route is renamed without updating this file.
  prerender: [...ROUTES, "/404"],

  async buildEnd({ buildManifest, viteConfig }) {
    void buildManifest;
    const clientDir = resolve(viteConfig.root, "build", "client");

    // React Router writes the 404 route to 404/index.html, but Cloudflare Pages
    // only looks for a top-level 404.html when serving a miss. Without this copy
    // Pages would fall back to SPA behaviour and answer 200 for every bad URL,
    // which search engines treat as a soft 404.
    await copyFile(
      resolve(clientDir, "404", "index.html"),
      resolve(clientDir, "404.html")
    );

    // Sitemap, generated from the same list that drives prerendering so the two
    // cannot drift apart.
    const today = new Date().toISOString().slice(0, 10);
    const urls = ROUTES.map((route) => {
      const loc = `${SITE_URL}${route === "/" ? "/" : route}`;
      const priority = route === "/" ? "1.0" : route === "/contact" ? "0.9" : "0.8";
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    }).join("\n");

    await writeFile(
      resolve(clientDir, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
    );

    await writeFile(
      resolve(clientDir, "robots.txt"),
      ["User-agent: *", "Allow: /", "", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join("\n")
    );

    console.log(`  Wrote 404.html, sitemap.xml (${ROUTES.length} urls) and robots.txt`);
  },
} satisfies Config;
