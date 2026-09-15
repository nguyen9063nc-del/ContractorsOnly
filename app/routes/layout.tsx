import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "~/components/site/Header";
import { Footer } from "~/components/site/Footer";

export default function SiteLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
