import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("services", "routes/services.tsx"),
    route("who-we-help", "routes/who-we-help.tsx"),
    route("equipment", "routes/equipment.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),

    // Prerendered to build/client/404/index.html. Cloudflare Pages serves a
    // top-level 404.html with a real 404 status; a `public/_redirects` rule
    // maps this route's output into place. See public/_redirects.
    route("404", "routes/not-found.tsx"),
    route("*", "routes/splat.tsx"),
  ]),
] satisfies RouteConfig;
