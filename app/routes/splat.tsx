import type { Route } from "./+types/splat";
import { NotFound } from "~/components/site/NotFound";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Page not found — Contractors Only" }, { name: "robots", content: "noindex" }];
}

/** Catch-all for unmatched client-side navigations. Cloudflare serves the
 *  prerendered /404 page for unmatched requests that reach the CDN. */
export default function Splat() {
  return <NotFound />;
}
