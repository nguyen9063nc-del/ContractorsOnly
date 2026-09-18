import { Outlet } from "react-router";

import { Header } from "~/components/site/Header";
import { Footer } from "~/components/site/Footer";

export default function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
