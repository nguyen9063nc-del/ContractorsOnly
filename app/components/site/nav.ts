export interface NavEntry {
  to: string;
  label: string;
}

export const NAV: NavEntry[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
];
