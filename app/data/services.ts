import type { IconName } from "~/components/Icon";
import type { ImageName } from "./images.generated";

/** Services page content, from templates/marketing-site/Services.dc.html. */

export const servicesHero = {
  eyebrow: "Services",
  titleTop: "Who we serve.",
  titleAccent: "What we do.",
  copy: "Agents, investors, property managers and owners all need the same thing: a property that is ready on time. We coordinate every trade it takes to get there.",
  photo: "walkthrough-tablet" as ImageName,
  alt: "Crew scoping a job on a walkthrough",
};

/** The 12-card capability catalog. */
export const catalog: {
  title: string;
  icon: IconName;
  photo: ImageName;
  alt: string;
  items: string[];
}[] = [
  {
    title: "Painting",
    icon: "paint-roller",
    photo: "interior-repainted-bedroom",
    alt: "Freshly painted interior room",
    items: [
      "Interior & exterior painting",
      "Walls, ceilings, trim & doors",
      "Cabinets & specialty finishes",
      "Color consultation",
    ],
  },
  {
    title: "Flooring",
    icon: "layers",
    photo: "interior-refinished-living-room",
    alt: "Refinished hardwood flooring",
    items: [
      "Install, repair & replace",
      "LVP, hardwood, tile, carpet",
      "Subfloor repair",
      "Baseboards & trim",
    ],
  },
  {
    title: "General repairs",
    icon: "wrench",
    photo: "carpenter-drilling",
    alt: "Carpenter making a repair",
    items: [
      "Doors, windows & hardware",
      "Drywall repair & texture",
      "Trim, fixtures & finishes",
      "Small and large repairs",
    ],
  },
  {
    title: "Cleaning",
    icon: "sparkles",
    photo: "deep-clean-kitchen",
    alt: "Deep cleaning a kitchen",
    items: [
      "Move-in / move-out cleaning",
      "Deep cleaning & final clean",
      "Post-construction cleaning",
      "Recurring maintenance",
    ],
  },
  {
    title: "Landscaping",
    icon: "trees",
    photo: "grass-trimming",
    alt: "Trimming grass along a walkway",
    items: [
      "Lawn care & maintenance",
      "Tree & shrub trimming",
      "Sod, mulch & plantings",
      "Irrigation repair",
    ],
  },
  {
    title: "Pressure washing",
    icon: "droplets",
    photo: "washing-exterior-wall",
    alt: "Pressure washing an exterior wall",
    items: [
      "Buildings, driveways & sidewalks",
      "Decks, fences & patios",
      "Mold, mildew & graffiti removal",
      "Prepare for painting or staining",
    ],
  },
  {
    title: "Hauling & junk removal",
    icon: "truck",
    photo: "movers-carrying-boxes",
    alt: "Crew carrying boxes out of a property",
    items: [
      "Debris removal & dump runs",
      "Construction waste",
      "Furniture & appliance removal",
      "Cleanouts, single items to full property",
    ],
  },
  {
    title: "Electrical",
    icon: "zap",
    photo: "fixture-light-install",
    alt: "Installing a light fixture",
    items: [
      "Lighting & fixture installation",
      "Outlets, switches & panels",
      "Troubleshooting & repairs",
      "Code compliance work",
    ],
  },
  {
    title: "Plumbing",
    icon: "wrench",
    photo: "handyman-drill",
    alt: "Handyman at work on a repair",
    items: [
      "Leaks, clogs & repairs",
      "Faucets, toilets & water heaters",
      "Fixture installation",
      "Pipe replacement",
    ],
  },
  {
    title: "HVAC",
    icon: "fan",
    photo: "service-van-worker",
    alt: "Service tech at the van",
    items: [
      "Installation & replacement",
      "Repairs & troubleshooting",
      "Maintenance & filter service",
      "Thermostats & ventilation",
    ],
  },
  {
    title: "Drywall & framing",
    icon: "square",
    photo: "wall-sanding",
    alt: "Sanding a drywall surface",
    items: [
      "Drywall install, repair & texture",
      "Framing & structural repairs",
      "Ceilings & partitions",
      "Prepare for paint",
    ],
  },
  {
    title: "Specialty trades",
    icon: "hammer",
    photo: "laser-level-layout",
    alt: "Laser level setting out a room",
    items: [
      "Carpentry & finish work",
      "Tile & stone",
      "Roofing & gutter repair",
      "And more — just ask",
    ],
  },
];

/** The four in-depth service groups below the catalog. */
export const serviceGroups: {
  title: string;
  icon: IconName;
  body: string;
  photos: { photo: ImageName; alt: string; caption: string }[];
  items: { title: string; detail: string }[];
}[] = [
  {
    title: "Interior repairs & finishes",
    icon: "paint-roller",
    body: "Everything inside the walls — paint, surfaces, flooring and the finish work that makes a space feel ready rather than repaired.",
    photos: [
      {
        photo: "plaster-patching",
        alt: "Plaster patching a wall",
        caption: "Paint and drywall repair.",
      },
      {
        photo: "interior-sunlit-hardwood",
        alt: "Newly installed hardwood floor",
        caption: "Flooring and carpet replacement.",
      },
      {
        photo: "office-meeting-room",
        alt: "Repainted meeting room",
        caption: "Repainted interior, ready for use.",
      },
      {
        photo: "carpenter-drilling",
        alt: "Carpenter fitting trim hardware",
        caption: "Trim, doors and cabinet work.",
      },
    ],
    items: [
      { title: "Interior painting", detail: "Walls, ceilings and trim in clean, consistent coats." },
      {
        title: "Drywall & ceiling repair",
        detail: "Holes, cracks and water damage patched and blended.",
      },
      { title: "Flooring & carpet", detail: "Replace or repair LVP, tile, hardwood and carpet." },
      {
        title: "Doors, trim & hardware",
        detail: "Sticking doors, damaged casing and worn hardware.",
      },
      { title: "Cabinet touch-ups", detail: "Refinish, re-hang and re-face instead of replacing." },
      { title: "Fixture replacement", detail: "Lighting, faucets, outlets and switch plates." },
      { title: "Minor carpentry", detail: "Framing fixes, shelving and small built-ins." },
      {
        title: "Punch-list repairs",
        detail: "The short list that holds up a closing or a move-in.",
      },
    ],
  },
  {
    title: "Exterior & grounds",
    icon: "trees",
    body: "Curb appeal and upkeep. The outside of a property is the first thing a buyer, tenant or inspector sees — and the first thing that gets flagged.",
    photos: [
      {
        photo: "trailer-exterior",
        alt: "Crew truck on a property exterior",
        caption: "Crews mobilized on site.",
      },
      {
        photo: "washing-exterior-wall",
        alt: "Washing an exterior wall",
        caption: "Pressure washing walkways and siding.",
      },
      {
        photo: "mowing-lawn",
        alt: "Mowing a property lawn",
        caption: "Landscaping and yard cleanup.",
      },
      {
        photo: "trailer-packout",
        alt: "Materials packed in a crew trailer",
        caption: "Debris packed out and hauled away.",
      },
    ],
    items: [
      { title: "Exterior painting", detail: "Siding, soffits, doors and railings." },
      { title: "Pressure washing", detail: "Walkways, siding, driveways and lots." },
      {
        title: "Landscaping & yard cleanup",
        detail: "Mowing, edging, trimming and bed refresh.",
      },
      {
        title: "Gutter cleaning",
        detail: "Cleared and checked so water runs away from the building.",
      },
      { title: "Fence & deck repair", detail: "Boards, posts, gates and railings made safe." },
      { title: "Debris removal", detail: "Yard waste, old materials and bulk items hauled off." },
    ],
  },
  {
    title: "Clean & prepare",
    icon: "sparkles",
    body: "The last mile before listing or move-in: everything cleaned, cleared and photo-ready on the date you need it.",
    photos: [
      {
        photo: "restroom-refresh",
        alt: "Freshly cleaned restroom",
        caption: "Restrooms cleaned and refreshed.",
      },
      {
        photo: "conference-room",
        alt: "Cleaned conference room",
        caption: "Deep clean before walkthrough.",
      },
      {
        photo: "office-files",
        alt: "Cleared and organized office",
        caption: "Cleared out and organized.",
      },
      {
        photo: "interior-open-plan-kitchen",
        alt: "Empty unit cleaned and photo-ready",
        caption: "Photo-ready on your listing date.",
      },
    ],
    items: [
      { title: "Deep cleaning", detail: "Top to bottom, including appliances and fixtures." },
      { title: "Carpet & upholstery", detail: "Hot-water extraction and spot treatment." },
      {
        title: "Window cleaning",
        detail: "Interior and reachable exterior glass, tracks and sills.",
      },
      {
        title: "Junk & appliance removal",
        detail: "Furniture, appliances and leftover tenant property.",
      },
      { title: "Cleanouts and hauling", detail: "Full-property clearouts with disposal handled." },
      {
        title: "Final photo-ready detail",
        detail: "The last pass before photos, showings or handover.",
      },
    ],
  },
  {
    title: "Specialty trades",
    icon: "wrench",
    body: "When a job needs a licensed trade, we bring it into the same scope and the same invoice instead of handing you another phone number.",
    photos: [
      {
        photo: "fixture-light-install",
        alt: "Installing a ceiling light fixture",
        caption: "Minor electrical repairs.",
      },
      {
        photo: "handyman-drill",
        alt: "Handyman making a fixture repair",
        caption: "Fixture and hardware repairs.",
      },
      {
        photo: "toolset-flatlay",
        alt: "Organized socket and tool set",
        caption: "Trade tools on every truck.",
      },
      {
        photo: "showroom",
        alt: "Completed commercial space",
        caption: "Trades coordinated under one scope.",
      },
    ],
    items: [
      { title: "Minor electrical", detail: "Fixtures, outlets, switches and troubleshooting." },
      { title: "Minor plumbing", detail: "Leaks, valves, fixtures and drain issues." },
      { title: "HVAC as needed", detail: "Service, filters and repairs to keep systems running." },
      {
        title: "Licensed trades through our network",
        detail: "Vetted specialists we already work with.",
      },
    ],
  },
];

export const servicesOutro = {
  title: "Don't see it listed?",
  copy: "This covers the most common work, not everything we can do. If a property needs something you don't see here, ask — if we can't do it ourselves, we usually know who can and will coordinate it as part of the same scope.",
  photo: "tools-flatlay" as ImageName,
  alt: "Trade tools laid out on a work surface",
};
