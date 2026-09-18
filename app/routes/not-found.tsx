import type { Route } from "./+types/not-found";
import { NotFound } from "~/components/site/NotFound";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Page not found — Contractors Only" }, { name: "robots", content: "noindex" }];
}

export default function NotFoundRoute() {
  return <NotFound />;
}
