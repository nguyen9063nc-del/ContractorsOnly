import type { ImageName } from "./images.generated";

/** Contact page content, from templates/marketing-site/Contact.dc.html. */

export const contactHero = {
  eyebrow: "Getting started",
  titleTop: "Tell us about",
  titleAccent: "the property.",
  copy: "We will need some basic information from you so we can get on the same page. After you fill out the form we will contact you and we can discuss next steps and get the project started.",
  photo: "handshake-over-documents" as ImageName,
  alt: "Handshake over project documents",
};

/** Drives both the aside checklist and the shape of the form itself. */
export const askFor = [
  "Your contact information",
  "When you would like to be contacted",
  "Preferred work time window",
  "The address of the property",
  "Any helpful photos",
  "Any helpful files",
];

export const faqs = [
  {
    q: "What areas do you serve?",
    a: "We work throughout the greater Seattle area from our Burien office, and we also take projects in the Portland and Los Angeles regions.",
  },
  {
    q: "How soon can you start?",
    a: "Most projects begin within a week of an approved scope. If you have a hard listing, closing or move-in date, tell us up front and we will schedule around it.",
  },
  {
    q: "Do I need to hire each trade separately?",
    a: "No. That is the point of working with us — one scope, one schedule and one point of contact for every trade the property needs.",
  },
  {
    q: "How long does a typical turnover take?",
    a: "About ten days for a standard turnover, because we overlap trades instead of running them one after another. Larger renovations are quoted with their own timeline.",
  },
  {
    q: "Do you provide estimates before work begins?",
    a: "Yes. We walk the property, put the scope and budget in writing, and you approve it before any crew shows up.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — fully licensed and insured, with documented, photo-verified work at the end of every project.",
  },
];

/** Options for the property-type select. */
export const propertyTypes = [
  "Single-family home",
  "Apartment / multifamily unit",
  "Commercial suite or retail",
  "Office / business park",
  "REO or distressed property",
  "Other",
];

export const timeWindows = [
  "As soon as possible",
  "Within two weeks",
  "Within a month",
  "I have a specific date",
];
