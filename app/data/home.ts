import type { ImageName } from "./images.generated";

/** Home page content, transcribed from templates/marketing-site/MarketingSite.dc.html. */

export const heroShots = [
  { name: "roof-replacement-crew" as ImageName, alt: "Crew replacing a roof on a property" },
  { name: "crew-ladders-facade" as ImageName, alt: "Crew working a building facade" },
  { name: "crew-painting-interior" as ImageName, alt: "Crew painting an interior" },
];

export const hero = {
  kicker: "Contractors Only",
  titleTop: "One call",
  titleAccent: "does it all.",
  copy: "From repairs and painting to landscaping and final cleanup, we coordinate everything to get your property market-ready — fast.",
};

/** The four "ones" strip under the hero. `icon` names are lucide-react icons. */
export const ones = [
  { title: "One Contact", sub: "No multiple contractors", icon: "phone" },
  { title: "Multiple Trades", sub: "We handle the entire list", icon: "wrench" },
  { title: "Our Equipment", sub: "Ready to move fast", icon: "truck" },
  { title: "Faster Turnaround", sub: "Efficient scheduling", icon: "clock" },
] as const;

export const serve = [
  {
    label: "Real estate agents",
    body: "Market ready by your listing date.",
    photo: "interior-sunlit-hardwood" as ImageName,
    alt: "Listing refreshed and staged for photos",
  },
  {
    label: "Property managers",
    body: "Turn units faster. Keep properties leasable.",
    photo: "bungalow-lawn" as ImageName,
    alt: "Rental property maintained between tenants",
  },
  {
    label: "Investors & flippers",
    body: "You find the opportunity, get it on the market faster.",
    photo: "room-under-renovation" as ImageName,
    alt: "Interior mid-renovation",
  },
  {
    label: "Commercial owners",
    body: "Keep commercial properties operational and looking their best.",
    photo: "showroom" as ImageName,
    alt: "Commercial property ready for business",
  },
];

export const capabilities = [
  {
    title: "Painting",
    sub: "Interior & exterior",
    photo: "interior-repainted-bedroom" as ImageName,
    alt: "Freshly painted interior room",
  },
  {
    title: "Flooring",
    sub: "Install, repair, replace",
    photo: "interior-refinished-living-room" as ImageName,
    alt: "Refinished hardwood flooring",
  },
  {
    title: "Repairs",
    sub: "Doors, trim, fixtures & more",
    photo: "carpenter-drilling" as ImageName,
    alt: "Carpenter making a repair",
  },
  {
    title: "Cleaning",
    sub: "Deep clean & pressure washing",
    photo: "deep-clean-kitchen" as ImageName,
    alt: "Deep cleaning an interior",
  },
  {
    title: "Landscaping",
    sub: "Cleanup, trimming, yard care",
    photo: "leaf-blower-cleanup" as ImageName,
    alt: "Crew clearing a property with a blower",
  },
  {
    title: "Specialty trades",
    sub: "Electrical, plumbing, HVAC",
    photo: "fixture-light-install" as ImageName,
    alt: "Installing a light fixture",
  },
];

export const fleet = [
  {
    title: "Vehicle fleet",
    sub: "Trucks and vans for every job size",
    photo: "work-van-at-house" as ImageName,
    alt: "Work van parked at a property",
  },
  {
    title: "Equipment trailers",
    sub: "Trade-specific mobile workshops",
    photo: "trailer-exterior" as ImageName,
    alt: "Enclosed equipment trailer at a job site",
  },
  {
    title: "Tools & supplies",
    sub: "Loaded and organized before we roll",
    photo: "toolset-flatlay" as ImageName,
    alt: "Organized professional tool set",
  },
  {
    title: "Specialty equipment",
    sub: "Lifts, mowers and heavy gear we own",
    photo: "exterior-work-lift" as ImageName,
    alt: "Boom lift on an exterior job",
  },
];

export const steps = [
  {
    title: "Send us the property",
    body: "Fill out the form to give us some basic information to get started. We will then contact you.",
  },
  {
    title: "We walk the property",
    body: "We document the condition, identify the work, and organize the scope.",
  },
  {
    title: "You approve the plan",
    body: "An estimate and plan are proposed. We can discuss any questions.",
  },
  {
    title: "We coordinate the work",
    body: "We handle scheduling and coordination across the required services.",
  },
  {
    title: "You get the property back ready",
    body: "Ready to list. Ready to rent. Ready to occupy. Ready for business.",
  },
];

/**
 * The "typical sequence" Gantt. `start` is the 1-indexed grid column (column 1
 * is the label gutter) and `span` its width. `cls` is the handoff's phase
 * colour class — colours live in the stylesheet, not here.
 */
export const sequence = [
  { name: "Plumbing", cls: "ph-plumbing", start: 2, span: 3 },
  { name: "Electrical work", cls: "ph-electrical", start: 2, span: 4 },
  { name: "Exterior paint", cls: "ph-ext-paint", start: 3, span: 3 },
  { name: "Landscaping", cls: "ph-landscape", start: 5, span: 2 },
  { name: "Interior paint", cls: "ph-int-paint", start: 6, span: 2 },
  { name: "Clean", cls: "ph-clean", start: 8, span: 2 },
];

export const recentWork = [
  {
    caption: "Office turnover",
    sub: "Repairs, finish work, and a full cleanout so the space is ready for its next tenant.",
    shots: [
      { name: "office-desk" as ImageName, alt: "Office workstation ready for move-in" },
      { name: "office-files" as ImageName, alt: "Organized office file storage" },
    ],
  },
  {
    caption: "Showroom & conference reset",
    sub: "Deep clean, paint, and fixtures brought back to standard before reopening.",
    shots: [
      { name: "family-house-facade" as ImageName, alt: "Completed residential exterior" },
      { name: "conference-room" as ImageName, alt: "Conference room ready for business" },
    ],
  },
  {
    caption: "Restroom refresh",
    sub: "Fixtures, tile, and finish work handled in a single coordinated visit.",
    shots: [{ name: "restroom-refresh" as ImageName, alt: "Refreshed commercial restroom" }],
  },
];
