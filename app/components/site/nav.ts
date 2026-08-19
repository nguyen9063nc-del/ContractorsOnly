export interface NavChild {
  to: string;
  label: string;
}

export interface NavEntry {
  to: string;
  label: string;
  children?: NavChild[];
}

export const NAV: NavEntry[] = [
  { to: "/", label: "Home" },
  { to: "/who-we-serve", label: "Who we serve" },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services/interior", label: "Interior" },
      { to: "/services/exterior", label: "Exterior" },
      { to: "/services/property-preparation", label: "Property preparation" },
    ],
  },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About us" },
];
