import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("who-we-serve", "routes/who-we-serve.tsx"),
    route("services", "routes/services.tsx", { id: "services-index" }),
    route("services/:category", "routes/services.tsx", { id: "services-category" }),
    route("portfolio", "routes/portfolio.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("*", "routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
