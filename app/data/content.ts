import type { IconName } from "lucide-react/dynamic";
import { PHOTOS, type ImageVariants } from "./images.generated";

/** A photo that may not exist yet — mirrors the design's src|need pattern so
    "photo needed" placeholders are explicit content, not a fallback for a bug. */
export interface MaybePhoto {
  photo: ImageVariants | null;
  alt?: string;
  /** Shown in the placeholder box when photo is null. */
  need?: string;
}

export const PHASE_COLORS = {
  navy: "#2f4858",
  teal: "#00688b",
  red: "#e02b1d",
  amber: "#c77800",
  green: "#2e7d5b",
  blue: "#4f6ea8",
  olive: "#6a8f2f",
  purple: "#7a4fa3",
  ink: "#1c1c1c",
} as const;

export interface PhaseGroup {
  name: string;
  color: string;
  start: number;
  span: number;
  items: string[];
}

export const PHONE_DISPLAY = "(425) 444-4514";
export const PHONE_HREF = "tel:4254444514";
export const EMAIL = "hannguyen1@comcast.net";
export const ADDRESS_LINE1 = "14600 1st Ave S";
export const ADDRESS_LINE2 = "Burien, WA 98168";

export interface Shot {
  tile: string;
  full: string;
  alt: string;
  filter?: string;
}

export const HERO_PHOTOS: Shot[] = [
  { ...PHOTOS["showroom"], alt: "Commercial showroom cleaned and ready for business", filter: "brightness(1.18) contrast(1.02)" },
  { ...PHOTOS["conference-room"], alt: "Conference room ready for business" },
  { ...PHOTOS["restroom-refresh"], alt: "Refreshed commercial restroom" },
];

export const ONES: { t: string; short: string; icon: IconName }[] = [
  { t: "One Contact", short: "No multiple contractors", icon: "phone" },
  { t: "Multiple Trades", short: "We handle the entire list", icon: "wrench" },
  { t: "Our Equipment", short: "Ready to move fast", icon: "truck" },
];

export const SPEED_POINTS = ["Fully stocked and organized", "Professional grade equipment", "Equipment for multiple trades", "Clean, efficient and secure", "Ready to deploy to your property"];

export const FLEET_STRIP: { src: string; t: string; b: string }[] = [
  { src: PHOTOS["trailer-exterior"].tile, t: "Enclosed trailers", b: "Mobile workshops" },
  { src: PHOTOS["trailer-packout"].tile, t: "Organized packout", b: "Tools and supplies on hand" },
  { src: PHOTOS["trailer-interior"].tile, t: "Staging and storage", b: "Materials, equipment & debris" },
  { src: PHOTOS["trailer-secured-load"].tile, t: "Specialized equipment", b: "Hauled in and secured" },
];

export interface HomeCapability {
  t: string;
  icon: IconName;
  src: string;
  alt: string;
  items: string[];
}

export const HOME_CAPABILITIES: HomeCapability[] = [
  { t: "Interior repairs & finishes", icon: "paint-roller", src: PHOTOS["office-desk"].tile, alt: "Refreshed interior workspace", items: ["Painting", "Drywall repair", "Trim & doors", "Flooring", "Cabinet touch-ups", "Fixture replacement", "Handyman services"] },
  { t: "Exterior & grounds", icon: "trees", src: PHOTOS["trailer-exterior"].tile, alt: "Crew truck on a property exterior", items: ["Pressure washing", "Landscaping", "Gutter cleaning", "Fence & deck repairs", "Exterior painting", "Yard cleanup"] },
  { t: "Clean & prepare", icon: "sparkles", src: PHOTOS["restroom-refresh"].tile, alt: "Freshly cleaned interior space", items: ["Deep cleaning", "Carpet cleaning", "Window cleaning", "Junk removal", "Appliance removal", "Final photo-ready cleaning"] },
  { t: "Specialty trades", icon: "wrench", src: PHOTOS["trailer-interior"].tile, alt: "Tools and equipment staged in a trailer", items: ["Electrical (minor repairs)", "Plumbing (minor repairs)", "HVAC (as needed)", "Other licensed trades through our network"] },
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
    { ...PHOTOS["office-desk"], alt: "Office workstation ready for move-in" },
    { ...PHOTOS["office-files"], alt: "Organized office file storage" },
  ] },
  { cap: "Showroom & conference reset", tag: "Commercial", sub: "Deep clean, paint, and fixtures brought back to standard before reopening.", shots: [
    { ...PHOTOS["showroom"], alt: "Commercial showroom cleaned and ready for business", filter: "brightness(1.18) contrast(1.02)" },
    { ...PHOTOS["conference-room"], alt: "Conference room ready for business" },
  ] },
  { cap: "Restroom refresh", tag: "Commercial", sub: "Fixtures, tile, and finish work handled in a single coordinated visit.", shots: [
    { ...PHOTOS["restroom-refresh"], alt: "Refreshed commercial restroom" },
  ] },
  { cap: "Meeting room turnaround", tag: "Commercial", sub: "Paint, carpet cleaning, and punch-list repairs completed between tenants.", shots: [
    { ...PHOTOS["conference-room"], alt: "Meeting room ready for occupancy" },
  ] },
];

/* ---- Services page ---- */

export interface ServiceAudience {
  label: string;
  icon: IconName;
  body: string;
  photo: MaybePhoto;
  caption: string;
  groups: PhaseGroup[];
}

const C = PHASE_COLORS;

export const SERVICES_AUDIENCES: ServiceAudience[] = [
  { label: "Real estate agents", icon: "house", body: "Market ready by your listing date. We manage the process so you can focus on the business side.",
    photo: { photo: PHOTOS["office-desk"], alt: "Interior prepared for listing photos" }, caption: "Pre-listing refresh completed the week before photos.",
    groups: [
      { name: "Repairs", color: C.navy, start: 2, span: 4, items: ["Drywall patching", "Trim and door repair", "Hardware replacement", "Inspection punch list"] },
      { name: "Paint", color: C.red, start: 3, span: 4, items: ["Interior repaint", "Accent wall removal", "Ceiling touch-up", "Exterior touch-up"] },
      { name: "Curb appeal", color: C.olive, start: 3, span: 4, items: ["Yard cleanup", "Mulch and edging", "Pressure washing", "Gutter clearing"] },
      { name: "Clean", color: C.teal, start: 5, span: 4, items: ["Deep clean", "Carpet cleaning", "Window cleaning", "Junk removal"] },
      { name: "Photo ready", color: C.ink, start: 7, span: 4, items: ["Staging prep", "Final detail pass", "Walkthrough with agent"] },
    ] },
  { label: "Investors & flippers", icon: "hammer", body: "You find the opportunity. We get it back on the market faster — one team instead of ten contractors.",
    photo: { photo: PHOTOS["showroom"], alt: "Retail space mid-renovation" }, caption: "Full cosmetic renovation turned around between tenants.",
    groups: [
      { name: "Demo & haul", color: C.navy, start: 2, span: 3, items: ["Interior demo", "Cabinet and fixture removal", "Flooring tear-out", "Debris haul-off"] },
      { name: "Rough trades", color: C.teal, start: 3, span: 3, items: ["Minor electrical", "Minor plumbing", "HVAC as needed", "Framing corrections"] },
      { name: "Surfaces", color: C.red, start: 4, span: 4, items: ["Drywall and texture", "Full interior paint", "Cabinet install", "Countertops"] },
      { name: "Flooring", color: C.green, start: 5, span: 4, items: ["LVP and tile", "Carpet install", "Baseboard and trim"] },
      { name: "Exterior", color: C.olive, start: 4, span: 3, items: ["Exterior paint", "Landscaping", "Fence and deck repair"] },
      { name: "Final clean", color: C.purple, start: 7, span: 4, items: ["Construction clean", "Final detail", "Relist photos"] },
    ] },
  { label: "Property managers", icon: "key-round", body: "Turn units faster. We repair damage, complete make-readies and handle recurring maintenance.",
    photo: { photo: PHOTOS["restroom-refresh"], alt: "Unit refreshed between tenants" }, caption: "Make-ready turnover handled in a single coordinated visit.",
    groups: [
      { name: "Cleanout", color: C.navy, start: 2, span: 3, items: ["Abandoned property removal", "Appliance haul-off", "Bulk debris removal"] },
      { name: "Damage repair", color: C.teal, start: 3, span: 3, items: ["Drywall and ceiling repair", "Door and frame repair", "Cabinet and counter repair", "Fixture replacement"] },
      { name: "Make ready", color: C.red, start: 3, span: 4, items: ["Full unit repaint", "Flooring and carpet", "Blinds and hardware", "Appliance install"] },
      { name: "Grounds", color: C.olive, start: 4, span: 4, items: ["Landscaping", "Pressure washing", "Breezeway and common areas"] },
      { name: "Turn clean", color: C.purple, start: 7, span: 4, items: ["Deep clean", "Carpet cleaning", "Move-in inspection"] },
    ] },
  { label: "Commercial property managers", icon: "store", body: "Keep commercial properties operational and presentable without managing multiple vendors.",
    photo: { photo: PHOTOS["conference-room"], alt: "Commercial suite prepared for handover" }, caption: "Suite turnover finished ahead of the tenant handover date.",
    groups: [
      { name: "Suite prep", color: C.navy, start: 2, span: 3, items: ["Demising and partition repair", "Ceiling tile replacement", "Door and lock service", "Signage removal"] },
      { name: "Finishes", color: C.red, start: 3, span: 4, items: ["Suite repaint", "Commercial flooring", "Restroom refresh", "Lighting replacement"] },
      { name: "Exterior", color: C.blue, start: 3, span: 4, items: ["Pressure washing", "Parking lot cleanup", "Storefront cleaning", "Landscaping"] },
      { name: "Common areas", color: C.amber, start: 4, span: 4, items: ["Corridor paint and repair", "Lobby refresh", "Stair and rail repair"] },
      { name: "Handover", color: C.ink, start: 7, span: 4, items: ["Final clean", "Punch list close-out", "Photo documentation"] },
    ] },
  { label: "Personal renovations", icon: "building-2", body: "Your home should not be a construction zone for months. Professional crews, quality materials, clear timelines.",
    photo: { photo: null, need: "Finished residential kitchen, bath or living space" }, caption: "Interior renovation delivered on the agreed finish date.",
    groups: [
      { name: "Planning", color: C.ink, start: 2, span: 2, items: ["Walkthrough and scope", "Material selection", "Fixed schedule and price"] },
      { name: "Demo", color: C.navy, start: 2, span: 3, items: ["Selective demo", "Site protection", "Debris removal"] },
      { name: "Build", color: C.teal, start: 3, span: 4, items: ["Drywall and carpentry", "Cabinet install", "Countertops and backsplash", "Minor electrical and plumbing"] },
      { name: "Finishes", color: C.red, start: 4, span: 4, items: ["Interior paint", "Flooring install", "Trim, doors and hardware", "Lighting and fixtures"] },
      { name: "Outside", color: C.olive, start: 4, span: 4, items: ["Exterior paint", "Deck and fence repair", "Yard improvements"] },
      { name: "Wrap up", color: C.purple, start: 7, span: 4, items: ["Punch list", "Final clean", "Client walkthrough"] },
    ] },
  { label: "REO & asset managers", icon: "shield-check", body: "From distressed to market ready through a single point of contact.",
    photo: { photo: PHOTOS["trailer-packout"], alt: "Property cleanout in progress" }, caption: "Full cleanout and haul-off ahead of repairs and listing.",
    groups: [
      { name: "Secure", color: C.ink, start: 2, span: 2, items: ["Lock changes and boarding", "Initial condition report", "Utility check"] },
      { name: "Cleanout", color: C.navy, start: 2, span: 3, items: ["Full property cleanout", "Appliance and furniture haul", "Hazard and debris removal"] },
      { name: "Repairs", color: C.teal, start: 3, span: 4, items: ["Drywall and structural patching", "Roof and gutter repair", "Plumbing and electrical repairs", "Window and door replacement"] },
      { name: "Preservation", color: C.olive, start: 4, span: 3, items: ["Landscaping and yard reclaim", "Pressure washing", "Winterization"] },
      { name: "Market prep", color: C.red, start: 4, span: 4, items: ["Interior and exterior paint", "Flooring replacement", "Deep clean"] },
      { name: "Reporting", color: C.purple, start: 7, span: 4, items: ["Photo verification", "Completion report"] },
    ] },
];

export interface ServiceCategoryItem {
  t: string;
  d: string;
}

export interface ServiceCategory {
  t: string;
  icon: IconName;
  body: string;
  photos: MaybePhoto[];
  captions: string[];
  items: ServiceCategoryItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { t: "Interior repairs & finishes", icon: "paint-roller",
    body: "Everything inside the walls — paint, surfaces, flooring and the finish work that makes a space feel ready rather than repaired.",
    photos: [
      { photo: null, need: "Paint or drywall work mid-job" },
      { photo: null, need: "New flooring being installed" },
      { photo: PHOTOS["conference-room"], alt: "Repainted meeting room" },
      { photo: null, need: "Trim, doors or cabinet finish work" },
    ],
    captions: ["Paint and drywall repair.", "Flooring and carpet replacement.", "Repainted interior, ready for use.", "Trim, doors and cabinet work."],
    items: [
      { t: "Interior painting", d: "Walls, ceilings and trim in clean, consistent coats." },
      { t: "Drywall & ceiling repair", d: "Holes, cracks and water damage patched and blended." },
      { t: "Flooring & carpet", d: "Replace or repair LVP, tile, hardwood and carpet." },
      { t: "Doors, trim & hardware", d: "Sticking doors, damaged casing and worn hardware." },
      { t: "Cabinet touch-ups", d: "Refinish, re-hang and re-face instead of replacing." },
      { t: "Fixture replacement", d: "Lighting, faucets, outlets and switch plates." },
      { t: "Minor carpentry", d: "Framing fixes, shelving and small built-ins." },
      { t: "Punch-list repairs", d: "The short list that holds up a closing or a move-in." },
    ] },
  { t: "Exterior & grounds", icon: "trees",
    body: "Curb appeal and upkeep. The outside of a property is the first thing a buyer, tenant or inspector sees — and the first thing that gets flagged.",
    photos: [
      { photo: PHOTOS["trailer-exterior"], alt: "Crew truck on a property exterior" },
      { photo: null, need: "Pressure washing in progress" },
      { photo: null, need: "Finished landscaping or yard cleanup" },
      { photo: PHOTOS["trailer-packout"], alt: "Materials packed in a crew trailer" },
    ],
    captions: ["Crews mobilized on site.", "Pressure washing walkways and siding.", "Landscaping and yard cleanup.", "Debris packed out and hauled away."],
    items: [
      { t: "Exterior painting", d: "Siding, soffits, doors and railings." },
      { t: "Pressure washing", d: "Walkways, siding, driveways and lots." },
      { t: "Landscaping & yard cleanup", d: "Mowing, edging, trimming and bed refresh." },
      { t: "Gutter cleaning", d: "Cleared and checked so water runs away from the building." },
      { t: "Fence & deck repair", d: "Boards, posts, gates and railings made safe." },
      { t: "Debris removal", d: "Yard waste, old materials and bulk items hauled off." },
    ] },
  { t: "Clean & prepare", icon: "sparkles",
    body: "The last mile before listing or move-in: everything cleaned, cleared and photo-ready on the date you need it.",
    photos: [
      { photo: PHOTOS["restroom-refresh"], alt: "Freshly cleaned restroom" },
      { photo: PHOTOS["conference-room"], alt: "Cleaned conference room" },
      { photo: PHOTOS["office-files"], alt: "Cleared and organized office" },
      { photo: null, need: "Empty unit staged and photo-ready" },
    ],
    captions: ["Restrooms cleaned and refreshed.", "Deep clean before walkthrough.", "Cleared out and organized.", "Photo-ready on your listing date."],
    items: [
      { t: "Deep cleaning", d: "Top to bottom, including appliances and fixtures." },
      { t: "Carpet & upholstery", d: "Hot-water extraction and spot treatment." },
      { t: "Window cleaning", d: "Interior and reachable exterior glass, tracks and sills." },
      { t: "Junk & appliance removal", d: "Furniture, appliances and leftover tenant property." },
      { t: "Cleanouts and hauling", d: "Full-property clearouts with disposal handled." },
      { t: "Final photo-ready detail", d: "The last pass before photos, showings or handover." },
    ] },
  { t: "Specialty trades", icon: "wrench",
    body: "When a job needs a licensed trade, we bring it into the same scope and the same invoice instead of handing you another phone number.",
    photos: [
      { photo: null, need: "Electrical work in progress" },
      { photo: null, need: "Plumbing repair in progress" },
      { photo: null, need: "HVAC service or install" },
      { photo: PHOTOS["showroom"], alt: "Completed commercial space" },
    ],
    captions: ["Minor electrical repairs.", "Minor plumbing repairs.", "HVAC service as needed.", "Trades coordinated under one scope."],
    items: [
      { t: "Minor electrical", d: "Fixtures, outlets, switches and troubleshooting." },
      { t: "Minor plumbing", d: "Leaks, valves, fixtures and drain issues." },
      { t: "HVAC as needed", d: "Service, filters and repairs to keep systems running." },
      { t: "Licensed trades through our network", d: "Vetted specialists we already work with." },
    ] },
];

/* ---- Equipment page ---- */

export interface FleetUnit {
  name: string;
  spec: string;
  photo: ImageVariants | null;
}

export interface FleetRow {
  label: string;
  blurb: string;
  units: FleetUnit[];
}

export const FLEET_ROWS: FleetRow[] = [
  { label: "Vehicles", blurb: "Sized to the job, from a single service call to a full turnover.",
    units: [
      { name: "Box truck", spec: "Full turnovers and bulk material runs.", photo: null },
      { name: "Sprinter van", spec: "High-roof capacity for interior trades.", photo: null },
      { name: "Chevy van", spec: "Service calls and punch-list work.", photo: null },
      { name: "Ford truck", spec: "Tows every trailer in the fleet.", photo: null },
    ] },
  { label: "Trailers", blurb: "Trade-specific packouts stay loaded, so crews work instead of making supply runs.",
    units: [
      { name: "Equipment trailer", spec: "Mowers, lifts and heavy equipment.", photo: PHOTOS["trailer-exterior"] },
      { name: "Flooring & painting trailer", spec: "Flooring, paint and install tools.", photo: null },
      { name: "Landscaping trailer", spec: "Mowers, trimmers, blowers and debris.", photo: null },
      { name: "Open trailer", spec: "Demo, cleanout and haul-off loads.", photo: null },
    ] },
];

export interface ToolItem {
  name: string;
  photo: ImageVariants | null;
}

export interface ToolRow {
  label: string;
  blurb: string;
  items: ToolItem[];
}

export const TOOL_ROWS: ToolRow[] = [
  { label: "Flooring", blurb: "Everything an install crew needs, staged before the truck leaves.",
    items: [
      { name: "Tile saws", photo: null }, { name: "Flooring nailers", photo: null }, { name: "Underlayment stock", photo: null },
      { name: "Trowels & levelers", photo: null }, { name: "Transition & trim stock", photo: null },
    ] },
  { label: "Landscaping", blurb: "Maintenance and reclaim gear for lots that have gone too long.",
    items: [
      { name: "Rough-cut tow-behind", photo: null }, { name: "Trimmers & edgers", photo: null }, { name: "Backpack blowers", photo: null },
      { name: "Hedge trimmers", photo: null }, { name: "Hauling & debris bins", photo: null },
    ] },
  { label: "Specialty equipment", blurb: "Height access and heavy cutting we own outright — no day-rate rentals.",
    items: [
      { name: "Snorkel lift", photo: null }, { name: "Genie lift", photo: null }, { name: "John Deere 1", photo: null },
      { name: "John Deere 2", photo: null }, { name: "Tow cutter", photo: null },
    ] },
];

/* ---- Portfolio page ---- */

export interface PortfolioPhoto {
  photo: ImageVariants | null;
  alt?: string;
  caption: string;
}

export interface PortfolioProject {
  name: string;
  body: string;
  hero: PortfolioPhoto;
  tiles: PortfolioPhoto[];
  strip: PortfolioPhoto[];
}

export const PROJECTS: PortfolioProject[] = [
  { name: "Property number 1",
    body: "A full commercial suite between tenants: drywall and paint repairs, fixture replacement, carpet cleaning and a complete cleanout. Photo-ready for the handover walkthrough on the date the manager needed it.",
    hero: { photo: PHOTOS["office-desk"], alt: "Office workstation ready for move-in", caption: "Suite cleaned and staged for the handover walkthrough." },
    tiles: [
      { photo: PHOTOS["office-files"], alt: "Organized office file storage", caption: "Storage cleared and organized." },
      { photo: null, caption: "Meeting room repaint" },
      { photo: null, caption: "Before — vacated suite" },
      { photo: null, caption: "Drywall repair" },
    ],
    strip: [
      { photo: null, caption: "Fixture replacement" }, { photo: null, caption: "Carpet cleaning" }, { photo: null, caption: "Break room refresh" },
      { photo: null, caption: "Entry and corridor paint" }, { photo: null, caption: "Final cleanout" }, { photo: null, caption: "After — ready for handover" },
    ] },
  { name: "Property number 2",
    body: "Deep clean, paint touch-up and floor refinishing across the sales floor, scheduled around store hours so the space stayed open through the work and reopened on standard.",
    hero: { photo: PHOTOS["showroom"], alt: "Commercial showroom cleaned and ready for business", caption: "Sales floor refinished and reopened on standard." },
    tiles: [
      { photo: null, caption: "Floor refinishing" }, { photo: null, caption: "Display repair" },
      { photo: null, caption: "Entry and glass detail" }, { photo: null, caption: "Wall touch-up" },
    ],
    strip: [
      { photo: null, caption: "Lighting service" }, { photo: null, caption: "Stockroom reset" }, { photo: null, caption: "Before — worn sales floor" },
      { photo: null, caption: "Overnight crew at work" }, { photo: null, caption: "Exterior pressure washing" }, { photo: null, caption: "After — open for business" },
    ] },
  { name: "Property number 3",
    body: "Fixtures, tile, grout and finish work handled in a single coordinated visit, with the common areas cleaned and repainted before tenants returned Monday morning.",
    hero: { photo: PHOTOS["restroom-refresh"], alt: "Refreshed unit bathroom", caption: "Fixtures, tile and grout completed in one visit." },
    tiles: [
      { photo: null, caption: "Tile and grout work" }, { photo: null, caption: "Fixture replacement" },
      { photo: null, caption: "Unit repaint" }, { photo: null, caption: "Common-area paint" },
    ],
    strip: [
      { photo: null, caption: "Stair and railing repair" }, { photo: null, caption: "Final detail pass" }, { photo: null, caption: "Before — vacated unit" },
      { photo: null, caption: "Flooring replacement" }, { photo: null, caption: "Grounds cleanup" }, { photo: null, caption: "After — ready to lease" },
    ] },
  { name: "Property number 4",
    body: "Paint, carpet cleaning and punch-list repairs completed between tenants, including lighting and hardware replacement, so the suites went straight from walkthrough to first meeting.",
    hero: { photo: PHOTOS["conference-room"], alt: "Conference room ready for business", caption: "Repainted and cleaned between tenants." },
    tiles: [
      { photo: null, caption: "Before — worn finishes" }, { photo: null, caption: "Carpet cleaning" },
      { photo: null, caption: "Lighting replacement" }, { photo: null, caption: "Hardware and door repair" },
    ],
    strip: [
      { photo: null, caption: "Suite repaint" }, { photo: null, caption: "Window cleaning" }, { photo: null, caption: "Lot pressure washing" },
      { photo: null, caption: "Landscaping refresh" }, { photo: null, caption: "Signage cleaning" }, { photo: null, caption: "After — ready to occupy" },
    ] },
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
