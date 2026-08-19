import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import appCss from "./styles/app.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/assets/logo-mark.png" },
  { rel: "stylesheet", href: appCss },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  let message = "Something went wrong";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The page you're looking for doesn't exist." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 32, fontFamily: "Archivo, sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: 40, margin: 0 }}>{message}</h1>
      <p style={{ color: "#4d4d4d", maxWidth: 480 }}>{details}</p>
      {stack ? (
        <pre style={{ width: "100%", maxWidth: 720, padding: 16, overflowX: "auto", textAlign: "left", background: "#f6f6f6" }}>
          <code>{stack}</code>
        </pre>
      ) : null}
      <a href="/" style={{ color: "#bf2419" }}>Back to home</a>
    </main>
  );
}
