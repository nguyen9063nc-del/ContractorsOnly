import type { ImageName } from "./images.generated";

/** Business details. Single source of truth — the footer, contact page and
 *  structured data all read from here. */
export const site = {
  name: "Contractors Only",
  tagline: "One call does it all.",
  description:
    "From repairs and painting to landscaping and final cleanup, we coordinate everything to get your property market-ready — fast.",
  phone: "(425) 444-4514",
  phoneHref: "tel:+14254444514",
  email: "hannguyen1@comcast.net",
  address: {
    street: "14600 1st Ave S",
    city: "Burien",
    state: "WA",
    zip: "98168",
  },
  regions: "Currently serving the Seattle, Portland and Los Angeles regions",
  legal: "Licensed & insured · Serving the metro area",
  copyright: "Your one-stop property make-ready partner.",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Who we help", to: "/who-we-help" },
  { label: "Equipment", to: "/equipment" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Interior", to: "/services" },
      { label: "Exterior", to: "/services" },
      { label: "Property preparation", to: "/services" },
      { label: "Cleanup & hauling", to: "/services" },
    ],
  },
  {
    heading: "Who we serve",
    links: [
      { label: "Real estate agents", to: "/who-we-help" },
      { label: "Property managers", to: "/who-we-help" },
      { label: "Investors", to: "/who-we-help" },
      { label: "Multifamily", to: "/who-we-help" },
      { label: "REO & asset managers", to: "/who-we-help" },
      { label: "Commercial", to: "/who-we-help" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How it works", to: "/services" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "About us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

/** Shared closing CTA band, reused at the foot of most pages. */
export const closingCta = {
  photo: "suburban-house-driveway" satisfies ImageName as ImageName,
  photoAlt: "Finished property, ready for its next chapter",
  titleRed: "One call.",
  title: "One property ... done",
  copy: "The value isn't simply that we can paint a wall, clean a carpet, or pressure wash a driveway. It's that you don't have to find someone different every time something needs to be done.",
  kicker: "Stop managing contractors",
} as const;
