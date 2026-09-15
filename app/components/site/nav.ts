export interface NavEntry {
  to: string;
  label: string;
}

/* The design export's header markup dropped the "Who we serve" link (its ref/active-state
   logic is still wired up, and the footer + page both still exist) — restored here since
   omitting it would strand WhoWeServe.dc.html with no way to reach it from the nav. */
export const NAV: NavEntry[] = [
  { to: "/", label: "Home" },
  { to: "/who-we-serve", label: "Who we serve" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
];
