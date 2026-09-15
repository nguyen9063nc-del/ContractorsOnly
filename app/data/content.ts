import type { IconName } from "lucide-react/dynamic";

export const PHONE_DISPLAY = "(425) 444-4514";
export const PHONE_HREF = "tel:4254444514";
export const EMAIL = "hannguyen1@comcast.net";
export const ADDRESS_LINE1 = "14600 1st Ave S";
export const ADDRESS_LINE2 = "Burien, WA 98168";

const P = "/assets/photos/";

export interface Shot {
  src: string;
  alt: string;
  filter?: string;
}

export const HERO_PHOTOS: Shot[] = [
  { src: P + "showroom.jpg", alt: "Commercial showroom cleaned and ready for business", filter: "brightness(1.18) contrast(1.02)" },
  { src: P + "conference-room.jpg", alt: "Conference room ready for business" },
  { src: P + "restroom-refresh.jpg", alt: "Refreshed commercial restroom" },
];

export const ONES: { t: string; short: string; icon: IconName }[] = [
  { t: "One Contact", short: "No multiple contractors", icon: "phone" },
  { t: "Multiple Trades", short: "We handle the entire list", icon: "wrench" },
  { t: "Our Equipment", short: "Ready to move fast", icon: "truck" },
];

export const SPEED_POINTS = ["Fully stocked and organized", "Professional grade equipment", "Equipment for multiple trades", "Clean, efficient and secure", "Ready to deploy to your property"];

export const FLEET_STRIP: { src: string; t: string; b: string }[] = [
  { src: P + "trailer-exterior.jpg", t: "Enclosed trailers", b: "Mobile workshops" },
  { src: P + "trailer-packout.jpg", t: "Organized packout", b: "Tools and supplies on hand" },
  { src: P + "trailer-interior.jpg", t: "Staging and storage", b: "Materials, equipment & debris" },
  { src: P + "trailer-secured-load.jpg", t: "Specialized equipment", b: "Hauled in and secured" },
];

export interface HomeCapability {
  t: string;
  icon: IconName;
  src: string;
  alt: string;
  items: string[];
}

export const HOME_CAPABILITIES: HomeCapability[] = [
  { t: "Interior repairs & finishes", icon: "paint-roller", src: P + "office-desk.jpg", alt: "Refreshed interior workspace", items: ["Painting", "Drywall repair", "Trim & doors", "Flooring", "Cabinet touch-ups", "Fixture replacement", "Handyman services"] },
  { t: "Exterior & grounds", icon: "trees", src: P + "trailer-exterior.jpg", alt: "Crew truck on a property exterior", items: ["Pressure washing", "Landscaping", "Gutter cleaning", "Fence & deck repairs", "Exterior painting", "Yard cleanup"] },
  { t: "Clean & prepare", icon: "sparkles", src: P + "restroom-refresh.jpg", alt: "Freshly cleaned interior space", items: ["Deep cleaning", "Carpet cleaning", "Window cleaning", "Junk removal", "Appliance removal", "Final photo-ready cleaning"] },
  { t: "Specialty trades", icon: "wrench", src: P + "trailer-interior.jpg", alt: "Tools and equipment staged in a trailer", items: ["Electrical (minor repairs)", "Plumbing (minor repairs)", "HVAC (as needed)", "Other licensed trades through our network"] },
];

export interface HomeAudience {
  label: string;
  icon: IconName;
  headline: string;
}

export const HOME_AUDIENCES: HomeAudience[] = [
  { label: "Real estate agents & listing teams", icon: "house", headline: "Market ready by your listing date — We manage the process so you can focus on the business side. We have experience with a variety of properties and can work on anything." },
  { label: "Investors & flippers", icon: "hammer", headline: "You find the opportunity. We help get it back on the market faster. Instead of managing up to 10 different contractors, you have one team coordinating the entire project." },
  { label: "Property managers", icon: "key-round", headline: "Turn units faster. We can repair damage to get units ready for the next tenants and perform necessary maintenance." },
  { label: "Commercial property managers", icon: "store", headline: "Keep commercial properties operational and looking their best without managing multiple vendors. We coordinate turnovers, repairs, painting, pressure washing and maintenance." },
  { label: "Personal renovations", icon: "building-2", headline: "Have a home improvement idea? Your home doesn't need to be a construction zone for months on end. Our contractors are professionals using high quality tools and materials." },
  { label: "REO & asset managers", icon: "shield-check", headline: "From distressed to market ready. We handle cleanouts, securing, repairs, landscaping, and property preparation through one point of contact." },
];

export interface Step {
  t: string;
  b: string;
}

export const STEPS: Step[] = [
  { t: "Send us the property", b: "Fill out the form to give us some basic information to get started. We will then contact you." },
  { t: "We walk the property", b: "We document the condition, identify the work, and organize the scope." },
  { t: "You approve the plan", b: "An estimate and plan are proposed. We can discuss any questions." },
  { t: "We coordinate the work", b: "We handle scheduling and coordination across the required services." },
  { t: "You get the property back ready", b: "Ready to list. Ready to rent. Ready to occupy. Ready for business." },
];

export interface WorkItem {
  cap: string;
  tag: string;
  sub: string;
  shots: Shot[];
}

export const WORK: WorkItem[] = [
  { cap: "Office turnover", tag: "Commercial", sub: "Repairs, finish work, and a full cleanout so the space is ready for its next tenant.", shots: [
    { src: P + "office-desk.jpg", alt: "Office workstation ready for move-in" },
    { src: P + "office-files.jpg", alt: "Organized office file storage" },
  ] },
  { cap: "Showroom & conference reset", tag: "Commercial", sub: "Deep clean, paint, and fixtures brought back to standard before reopening.", shots: [
    { src: P + "showroom.jpg", alt: "Commercial showroom cleaned and ready for business", filter: "brightness(1.18) contrast(1.02)" },
    { src: P + "conference-room.jpg", alt: "Conference room ready for business" },
  ] },
  { cap: "Restroom refresh", tag: "Commercial", sub: "Fixtures, tile, and finish work handled in a single coordinated visit.", shots: [
    { src: P + "restroom-refresh.jpg", alt: "Refreshed commercial restroom" },
  ] },
  { cap: "Meeting room turnaround", tag: "Commercial", sub: "Paint, carpet cleaning, and punch-list repairs completed between tenants.", shots: [
    { src: P + "office-meeting-room.jpg", alt: "Meeting room ready for occupancy" },
  ] },
];

/* ---- Services page ---- */

export interface ServiceAudience {
  label: string;
  icon: IconName;
  body: string;
  points: string[];
}

export const SERVICES_AUDIENCES: ServiceAudience[] = [
  { label: "Real estate agents", icon: "house", body: "Market ready by your listing date. We manage the process so you can focus on the business side.", points: ["Pre-listing repairs and paint", "Photo-ready cleaning", "Punch lists closed before showings"] },
  { label: "Investors & flippers", icon: "hammer", body: "You find the opportunity. We get it back on the market faster — one team instead of ten contractors.", points: ["Full cosmetic renovations", "Scope and budget up front", "Schedule built around your closing"] },
  { label: "Property managers", icon: "key-round", body: "Turn units faster. We repair damage, complete make-readies and handle recurring maintenance.", points: ["Rental turnovers", "Damage and tenant repairs", "Recurring maintenance visits"] },
  { label: "Commercial property managers", icon: "store", body: "Keep commercial properties operational and presentable without managing multiple vendors.", points: ["Suite turnovers and refreshes", "Pressure washing and exteriors", "After-hours scheduling"] },
  { label: "Personal renovations", icon: "building-2", body: "Your home should not be a construction zone for months. Professional crews, quality materials, clear timelines.", points: ["Kitchens, baths and interiors", "Exterior and yard improvements", "One coordinator start to finish"] },
  { label: "REO & asset managers", icon: "shield-check", body: "From distressed to market ready through a single point of contact.", points: ["Cleanouts and securing", "Repairs and landscaping", "Documented, photo-verified work"] },
];

export interface ServiceCategory {
  t: string;
  icon: IconName;
  src: string;
  alt: string;
  caption: string;
  body: string;
  items: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { t: "Interior repairs & finishes", icon: "paint-roller", src: P + "office-desk.jpg", alt: "Refreshed interior workspace", caption: "Interior refresh completed ahead of tenant move-in.", body: "Everything inside the walls — paint, surfaces, flooring and the finish work that makes a space feel ready rather than repaired.", items: ["Interior painting", "Drywall & ceiling repair", "Flooring & carpet", "Doors, trim & hardware", "Cabinet touch-ups", "Fixture replacement", "Minor carpentry", "Punch-list repairs"] },
  { t: "Exterior & grounds", icon: "trees", src: P + "trailer-exterior.jpg", alt: "Crew truck on a property exterior", caption: "Exterior cleanup and pressure washing on a commercial lot.", body: "Curb appeal and upkeep. The outside of a property is the first thing a buyer, tenant or inspector sees — and the first thing that gets flagged.", items: ["Exterior painting", "Pressure washing", "Landscaping & yard cleanup", "Gutter cleaning", "Fence & deck repair", "Debris removal"] },
  { t: "Clean & prepare", icon: "sparkles", src: P + "restroom-refresh.jpg", alt: "Freshly cleaned interior space", caption: "Restroom refresh handled in a single coordinated visit.", body: "The last mile before listing or move-in: everything cleaned, cleared and photo-ready on the date you need it.", items: ["Deep cleaning", "Carpet & upholstery", "Window cleaning", "Junk & appliance removal", "Cleanouts and hauling", "Final photo-ready detail"] },
  { t: "Specialty trades", icon: "wrench", src: P + "trailer-interior.jpg", alt: "Tools and equipment staged in a trailer", caption: "Fully stocked trailers keep crews working without supply runs.", body: "When a job needs a licensed trade, we bring it into the same scope and the same invoice instead of handing you another phone number.", items: ["Minor electrical", "Minor plumbing", "HVAC as needed", "Licensed trades through our network", "Coordination & scheduling", "Single point of contact"] },
];

export interface TimelineRow {
  label: string;
  colStart: number;
  colSpan: number;
  color: string;
}

export const TIMELINE: TimelineRow[] = [
  { label: "Cleanout & haul-off", colStart: 2, colSpan: 2, color: "#2f4858" },
  { label: "Drywall repair", colStart: 3, colSpan: 2, color: "#00688b" },
  { label: "Interior painting", colStart: 4, colSpan: 4, color: "#e02b1d" },
  { label: "Cabinets & fixtures", colStart: 7, colSpan: 2, color: "#c77800" },
  { label: "Flooring install", colStart: 8, colSpan: 3, color: "#2e7d5b" },
  { label: "Pressure washing", colStart: 5, colSpan: 2, color: "#4f6ea8" },
  { label: "Landscaping", colStart: 6, colSpan: 3, color: "#6a8f2f" },
  { label: "Deep clean", colStart: 11, colSpan: 2, color: "#7a4fa3" },
  { label: "Final walkthrough", colStart: 13, colSpan: 1, color: "#1c1c1c" },
];

/* ---- Equipment page ---- */

export interface FleetUnit {
  name: string;
  spec: string;
  ph: string;
  src?: string;
}

export const MOWERS: FleetUnit[] = [
  { name: "John Deere zero-turn #1", spec: "Wide-deck maintenance mowing.", ph: "John Deere 1" },
  { name: "John Deere zero-turn #2", spec: "Second unit — two properties at once.", ph: "John Deere 2" },
  { name: "Tow-behind rough cut", spec: "Overgrown and vacant lot reclaim.", ph: "Tow-behind" },
];

export const TRAILERS: FleetUnit[] = [
  { name: "Landscaping trailer", spec: "Mowers, trimmers, blowers and debris hauling.", ph: "Landscaping trailer", src: P + "trailer-secured-load.jpg" },
  { name: "Summit open trailer", spec: "Demo, cleanout and haul-off loads.", ph: "Summit open", src: P + "trailer-exterior.jpg" },
  { name: "White flooring trailer", spec: "Flooring, underlayment and install tools.", ph: "Flooring trailer", src: P + "trailer-packout.jpg" },
  { name: "White general supplies trailer", spec: "Paint, drywall and general trade stock.", ph: "General supplies", src: P + "trailer-interior.jpg" },
];

export const TRUCKS: FleetUnit[] = [
  { name: "Ford truck", spec: "Tows every trailer in the fleet.", ph: "Ford truck" },
  { name: "Chevrolet van", spec: "Service calls and punch-list work.", ph: "Chevy van" },
  { name: "Sprinter van", spec: "High-roof capacity for interior trades.", ph: "Sprinter van" },
];

export const LIFTS = [
  { name: "Genie towable boom lift", spec: "Rooflines, soffits and second-story exteriors.", ph: "Genie lift" },
  { name: "Snorkel scissor lift", spec: "High interior ceilings in retail and warehouse space.", ph: "Snorkel lift" },
];

/* ---- About page ---- */

export const TEAM = [
  { name: "Phillip Tran", role: "Project Manager" },
  { name: "Ryan Keliher", role: "Project Manager" },
  { name: "Phuong Nguyen", role: "Principal Designer" },
  { name: "Andrew Lacko", role: "Principal Architect" },
  { name: "Lisa Keliher", role: "Project Coordinator" },
];

/* ---- Contact page ---- */

export const ASK_FOR = ["Your contact information", "When you would like to be contacted", "Preferred work time window", "The address of the property", "Any helpful photos", "Any helpful files"];

export const CONTACT_FAQS = [
  { q: "What areas do you serve?", a: "We work throughout the greater Seattle area from our Burien office, and we also take projects in the Portland and Los Angeles regions." },
  { q: "How soon can you start?", a: "Most projects begin within a week of an approved scope. If you have a hard listing, closing or move-in date, tell us up front and we will schedule around it." },
  { q: "Do I need to hire each trade separately?", a: "No. That is the point of working with us — one scope, one schedule and one point of contact for every trade the property needs." },
  { q: "How long does a typical turnover take?", a: "About ten days for a standard turnover, because we overlap trades instead of running them one after another. Larger renovations are quoted with their own timeline." },
  { q: "Do you provide estimates before work begins?", a: "Yes. We walk the property, put the scope and budget in writing, and you approve it before any crew shows up." },
  { q: "Are you licensed and insured?", a: "Yes — fully licensed and insured, with documented, photo-verified work at the end of every project." },
];
