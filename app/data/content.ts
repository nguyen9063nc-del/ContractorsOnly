import type { IconName } from "lucide-react/dynamic";

export interface AudienceSummary {
  label: string;
  icon: IconName;
  headline: string;
  tags: string[];
  cta: string;
}

export const AUDIENCES: AudienceSummary[] = [
  { label: "Property managers", icon: "key-round", headline: "Turn units faster. We can repair damage to get units ready for the next tenants and perform necessary maintenance.", tags: ["Unit turns", "Tenant damage", "Make-ready", "Recurring maintenance"], cta: "Submit a turnover" },
  { label: "Real estate agents & listing teams", icon: "house", headline: "Market ready by your listing date — We manage the process so you can focus on the business side. We have experience with a variety of properties and can work on anything.", tags: ["Pre-listing repairs", "Punch lists", "Paint", "Landscaping"], cta: "Prepare a listing" },
  { label: "Investors & flippers", icon: "hammer", headline: "You find the opportunity. We help get it back on the market faster. Instead of managing up to 10 different contractors, you have one team coordinating the entire project.", tags: ["Rehabs", "Demo", "Flooring", "Final clean"], cta: "Plan a rehab" },
  { label: "Personal renovations", icon: "building-2", headline: "Have a home improvement idea? Your home doesn't need to be a construction zone for months on end. Our contractors are professionals using high quality tools and materials.", tags: ["Demo", "Drywall", "Paint", "Flooring", "Final clean"], cta: "Plan a renovation" },
  { label: "REO & asset managers", icon: "shield-check", headline: "From distressed to market ready. We handle cleanouts, securing, repairs, landscaping, and property preparation through one point of contact.", tags: ["Cleanouts", "Securing", "Repairs", "Landscaping"], cta: "Submit a property" },
  { label: "Commercial property managers", icon: "store", headline: "Keep commercial properties operational and looking their best without managing multiple vendors. We coordinate turnovers, repairs, painting, pressure washing and maintenance.", tags: ["Turnovers", "Painting", "Pressure washing", "Repairs"], cta: "Request commercial service" },
];

export interface ServiceCategory {
  slug: "interior" | "exterior" | "property-preparation";
  title: string;
  icon: IconName;
  intro: string;
  items: string[];
}

export const SERVICES: ServiceCategory[] = [
  {
    slug: "interior",
    title: "Interior",
    icon: "paint-roller",
    intro: "Everything inside the walls — paint, surfaces, flooring, and the finish work that makes a space feel ready.",
    items: ["Interior painting", "Drywall repair", "Wall and ceiling repair", "Flooring", "Carpet cleaning", "Deep cleaning", "Fixture replacement", "Door and trim repair", "Minor carpentry", "Punch-list repairs"],
  },
  {
    slug: "exterior",
    title: "Exterior",
    icon: "trees",
    intro: "Curb appeal and upkeep — the outside of the property is the first thing a buyer, tenant, or inspector sees.",
    items: ["Exterior painting", "Pressure washing", "Landscaping", "Yard cleanup", "Gutter cleaning", "Fence and gate repair", "Exterior cleanup", "Debris removal", "Minor exterior repairs"],
  },
  {
    slug: "property-preparation",
    title: "Property preparation",
    icon: "clipboard-check",
    intro: "Coordinated packages that take a property from its current condition to ready — for listing, renting, or occupancy.",
    items: ["Pre-listing preparation", "Rental turnovers", "Apartment make-ready", "Inspection punch lists", "Investor property preparation", "REO property preparation", "Commercial property refreshes", "Cleanup and hauling"],
  },
];

export interface Step {
  t: string;
  b: string;
}

export const STEPS: Step[] = [
  { t: "Send us the property", b: "Fill out the form to give us some basic information to get started. We will then contact you." },
  { t: "We walk the property", b: "We document the condition, identify the work, and organize the scope." },
  { t: "You approve the plan", b: "An estimate and plan are proposed. We can discuss any questions, concerns or comments you have." },
  { t: "We coordinate the work", b: "We handle scheduling and coordination across the required services." },
  { t: "You get the property back ready", b: "Ready to list. Ready to rent. Ready to occupy. Ready for business." },
];

export const ONES = [
  { t: "Start Fast", b: "There is always a project coordinator available. Just fill out a simple form and we will get back to you within 1 day." },
  { t: "Flexibility", b: "We work around your budget and timeline. We are mobile and can work anywhere." },
  { t: "Professional", b: "Every contractor we employ is vetted, insured, experienced and held to the highest standard." },
  { t: "One scope", b: "We organize the work, giving you one proposal with clear pricing for each major work." },
  { t: "One Contact", b: "If you have any problem at any time you can call one person. We will deal with the problem so you don't have to." },
  { t: "One invoice", b: "A simpler way to manage property work from beginning to end." },
];

export interface AudienceDetail {
  key: string;
  icon: IconName;
  kicker: string;
  headline: string;
  lead: string;
  services: string[];
  cta: string;
}

export const AUDIENCE_DETAIL: AudienceDetail[] = [
  { key: "property-managers", icon: "key-round", kicker: "Property managers", headline: "Turn units faster. Manage fewer vendors.", lead: "Turn units faster. We can repair damage to get units ready for the next tenants and perform necessary maintenance — from move-out to move-in, coordinated on one schedule.", services: ["Unit turns", "Tenant damage", "Make-ready", "Recurring maintenance", "Painting", "Cleaning", "Flooring"], cta: "Submit a turnover" },
  { key: "agents-listing-teams", icon: "house", kicker: "Real estate agents & listing teams", headline: "Market ready by your listing date.", lead: "We manage the process so you can focus on the business side. We have experience with a variety of properties and can work on anything — pre-listing repairs, punch lists, paint, landscaping and more.", services: ["Pre-listing repairs", "Punch lists", "Paint", "Landscaping", "Carpet cleaning", "Pressure washing"], cta: "Prepare a listing" },
  { key: "investors-flippers", icon: "hammer", kicker: "Investors & flippers", headline: "You find the opportunity. We get it back on the market faster.", lead: "Instead of managing up to 10 different contractors, you have one team coordinating the entire project. Reduce delays and get your investment on the market fast.", services: ["Rehabs", "Demo", "Drywall", "Paint", "Flooring", "Final clean"], cta: "Plan a rehab" },
  { key: "personal-renovations", icon: "building-2", kicker: "Personal renovations", headline: "Your home doesn't need to be a construction zone for months.", lead: "Have a home improvement idea? Maybe an area that is looking a bit outdated? Our contractors are professionals using high quality tools and materials.", services: ["Demo", "Drywall", "Paint", "Flooring", "Final clean"], cta: "Plan a renovation" },
  { key: "reo-asset-managers", icon: "shield-check", kicker: "REO & asset managers", headline: "From distressed to market ready.", lead: "We handle cleanouts, securing, repairs, landscaping, and property preparation through one point of contact — helping you move assets toward listing or disposition faster.", services: ["Cleanouts", "Securing", "Repairs", "Landscaping", "Documentation"], cta: "Submit a property" },
  { key: "commercial-property-managers", icon: "store", kicker: "Commercial property managers", headline: "Operational and looking their best — without managing multiple vendors.", lead: "We coordinate turnovers, repairs, painting, pressure washing, maintenance, and property improvements for retail, office, and light-industrial properties.", services: ["Turnovers", "Painting", "Pressure washing", "Repairs", "Maintenance"], cta: "Request commercial service" },
];

export const AUDIENCE_FAQ = [
  { title: "Do you handle rental turnovers end to end?", body: "Yes. Move-out to move-in: painting, cleaning, flooring, drywall, repairs, landscaping, pressure washing and hauling — coordinated on one schedule with one point of contact." },
  { title: "Can you walk the property for me?", body: "That's usually the fastest start. We document the condition, identify the work, and come back with one organized scope and estimate for your approval." },
  { title: "What if a unit needs something you didn't scope?", body: "We flag it, price it, and wait for your approval before it happens. You always know what we're doing before work begins." },
  { title: "Do I get one invoice?", body: "One scope, one point of contact, one invoice — however many trades the job required." },
];

export interface WorkItem {
  cap: string;
  tag: string;
  sub: string;
  shots: { src: string; alt: string; filter?: string }[];
}

export const WORK: WorkItem[] = [
  { cap: "Office turnover", tag: "Commercial", sub: "Repairs, finish work, and a full cleanout so the space is ready for its next tenant.", shots: [
    { src: "/assets/photos/office-desk.jpg", alt: "Office workstation ready for move-in" },
    { src: "/assets/photos/office-files.jpg", alt: "Organized office file storage" },
  ] },
  { cap: "Showroom & conference reset", tag: "Commercial", sub: "Deep clean, paint, and fixtures brought back to standard before reopening.", shots: [
    { src: "/assets/photos/showroom.jpg", alt: "Commercial showroom cleaned and ready for business", filter: "brightness(1.18) contrast(1.02)" },
    { src: "/assets/photos/conference-room.jpg", alt: "Conference room ready for business" },
  ] },
  { cap: "Restroom refresh", tag: "Commercial", sub: "Fixtures, tile, and finish work handled in a single coordinated visit.", shots: [
    { src: "/assets/photos/restroom-refresh.jpg", alt: "Refreshed commercial restroom" },
  ] },
  { cap: "Meeting room turnaround", tag: "Commercial", sub: "Paint, carpet cleaning, and punch-list repairs completed between tenants.", shots: [
    { src: "/assets/photos/office-meeting-room.jpg", alt: "Meeting room ready for occupancy" },
  ] },
];

export const VALUES = [
  { icon: "clipboard-check" as IconName, t: "One point of contact", b: "One coordinator owns your property from the first walkthrough to the final invoice." },
  { icon: "clock" as IconName, t: "Built around deadlines", b: "Listings, move-ins, inspections — we build the schedule backwards from your date." },
  { icon: "shield-check" as IconName, t: "Professional crews", b: "Vetted contractors using quality tools and materials, coordinated as one team." },
];

export const PHONE_DISPLAY = "(888) 378-5610";
export const PHONE_HREF = "tel:8883785610";
