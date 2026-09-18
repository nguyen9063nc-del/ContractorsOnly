import type { IconName } from "~/components/Icon";
import type { ImageName } from "./images.generated";

/** Who we help content, from templates/marketing-site/WhoWeHelp.dc.html. */

export const whoHero = {
  eyebrow: "Different properties. Same goal.",
  titleTop: "Who we",
  titleAccent: "help.",
  copy: "We partner with real estate professionals, property owners and managers to prepare, improve and maintain properties — faster, easier and with less hassle. No matter the property type, we make it simple to get the job done.",
  photo: "crew-ladders-facade" as ImageName,
  alt: "Crew working a building facade",
};

export const audiences: {
  label: string;
  icon: IconName;
  body: string;
  photo: ImageName;
  alt: string;
}[] = [
  {
    label: "Real estate agents",
    icon: "house",
    body: "Get listings market-ready, faster. Impress your sellers and win more business with a partner who delivers.",
    photo: "home-with-porch",
    alt: "Listing refreshed and ready for showings",
  },
  {
    label: "Investors & flippers",
    icon: "hammer",
    body: "Maximize value and minimize downtime. We handle the entire scope so you can focus on your next deal.",
    photo: "room-under-renovation",
    alt: "Interior mid-renovation",
  },
  {
    label: "Property managers",
    icon: "key-round",
    body: "Keep your properties in top condition. We handle turnovers, repairs and ongoing maintenance with speed and reliability.",
    photo: "restroom-refresh",
    alt: "Unit refreshed between tenants",
  },
  {
    label: "Commercial owners",
    icon: "store",
    body: "From tenant improvements to routine maintenance, we minimize disruption and keep your property operating.",
    photo: "commercial-hallway-cart",
    alt: "Commercial corridor being serviced",
  },
  {
    label: "REO & asset managers",
    icon: "shield-check",
    body: "Fast, reliable property preservation and repairs. We understand timelines, inspections and compliance.",
    photo: "movers-carrying-boxes",
    alt: "Crew clearing a property",
  },
  {
    label: "Homeowners",
    icon: "building-2",
    body: "Whether it is a single project or multiple upgrades, we make home improvement easy with one call.",
    photo: "family-house-facade",
    alt: "Finished single-family home",
  },
];

export const reasons: { title: string; icon: IconName; body: string }[] = [
  {
    title: "One point of contact",
    icon: "phone",
    body: "You tell us what you need and we handle the rest — scoping, scheduling, crews and follow-up. No chasing five contractors for status updates, and no gaps between them.",
  },
  {
    title: "Multiple trades working together",
    icon: "wrench",
    body: "Paint, flooring, repairs and the licensed trades all answer to the same schedule. We sequence them so they overlap where they can instead of waiting in line.",
  },
  {
    title: "Faster turnarounds",
    icon: "clock",
    body: "Overlapping trades and stocked trailers mean fewer idle days. Your property is ready for photos, showings or move-in sooner than a contractor-by-contractor timeline allows.",
  },
  {
    title: "Quality work you can trust",
    icon: "shield-check",
    body: "Experienced crews, quality materials and a punch-list pass before we call it done. Anything outside the original scope gets flagged and priced before we touch it.",
  },
];

export const marks: { title: string; icon: IconName }[] = [
  { title: "On time", icon: "clock" },
  { title: "Professional crews", icon: "users" },
  { title: "High quality work", icon: "star" },
  { title: "Happy clients", icon: "thumbs-up" },
];

export const testimonial = {
  quote:
    "Contractors Only has been a game changer for my business. I can get a property fully ready with one call instead of coordinating multiple contractors. They are fast, reliable, and the quality is consistently excellent.",
  name: "Jessica M.",
  role: "Real estate agent, Seattle, WA",
};

export const reasonsPhoto = {
  photo: "walkthrough-tablet" as ImageName,
  alt: "Crew coordinating a scope on site",
};
