import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";

import { site } from "~/data/site";
// Self-hosted faces first, then the handoff stylesheet (used verbatim), then
// the few surfaces it does not cover.
import "./styles/fonts.css";
import "./styles/contractors-only.css";
import "./styles/site.css";

export const links: Route.LinksFunction = () => [
  // Preconnect is deliberately absent: fonts and images are same-origin, so
  // there is no third-party handshake left to warm up.

  // Only the two faces used above the fold are preloaded. The rest are
  // discovered from the stylesheet when a page actually needs them.
  {
    rel: "preload",
    href: "/fonts/archivo-700-latin.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/ibm-plex-sans-400-latin.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e02b1d" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let heading = "Something went wrong";
  let detail = "An unexpected error occurred. Please try again.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    heading = error.status === 404 ? "Page not found" : `Error ${error.status}`;
    detail =
      error.status === 404
        ? "That page does not exist. Check the address, or head back to the home page."
        : error.statusText || detail;
  } else if (import.meta.env.DEV && error instanceof Error) {
    detail = error.message;
    stack = error.stack;
  }

  return (
    <main className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{site.name}</span>
          <h1 className="section-h2">{heading}</h1>
          <div className="section-head__row">
            <p className="body">{detail}</p>
          </div>
        </div>
        <a className="btn btn--primary" href="/">
          Start your project
        </a>
        {stack ? (
          <pre className="caption">
            <code>{stack}</code>
          </pre>
        ) : null}
      </div>
    </main>
  );
}
