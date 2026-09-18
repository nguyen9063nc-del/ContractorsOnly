import type { ImageName } from "./images.generated";

/** Portfolio content, from templates/marketing-site/Portfolio.dc.html. */

export const portfolioHero = {
  eyebrow: "Portfolio",
  titleTop: "Recent work.",
  titleAccent: "One schedule.",
  copy: "A sample of properties we've turned around — every trade coordinated by us and delivered on one timeline.",
  photo: "family-house-facade" as ImageName,
  alt: "Completed property exterior",
};

type Shot = { photo: ImageName; alt: string; caption: string };

export const projects: {
  name: string;
  body: string;
  hero: Shot;
  tiles: Shot[];
}[] = [
  {
    name: "Property one — office suite",
    body: "A full commercial suite between tenants: drywall and paint repairs, fixture replacement, carpet cleaning and a complete cleanout. Photo-ready for the handover walkthrough on the date the manager needed it.",
    hero: {
      photo: "office-desk",
      alt: "Office workstation ready for move-in",
      caption: "Suite cleaned and staged for the handover walkthrough.",
    },
    tiles: [
      {
        photo: "boxes-empty-room",
        alt: "Vacated suite before work",
        caption: "Before — vacated suite.",
      },
      { photo: "plaster-patching", alt: "Patching drywall", caption: "Drywall repair." },
      {
        photo: "crew-painting-interior",
        alt: "Crew repainting an interior",
        caption: "Interior repaint.",
      },
      {
        photo: "office-files",
        alt: "Organized office storage",
        caption: "Cleared and organized.",
      },
    ],
  },
  {
    name: "Property two — retail showroom",
    body: "Deep clean, paint touch-up and floor refinishing across the sales floor, scheduled around store hours so the space stayed open through the work and reopened on standard.",
    hero: {
      photo: "showroom",
      alt: "Commercial showroom cleaned and ready for business",
      caption: "Sales floor refinished and reopened on standard.",
    },
    tiles: [
      {
        photo: "room-under-renovation",
        alt: "Sales floor before work",
        caption: "Before — worn sales floor.",
      },
      { photo: "paint-brush-wall", alt: "Brushing a wall touch-up", caption: "Wall touch-up." },
      {
        photo: "fixture-light-install",
        alt: "Installing a light fixture",
        caption: "Lighting replacement.",
      },
      {
        photo: "mopping-interior",
        alt: "Mopping the finished floor",
        caption: "Final floor clean.",
      },
    ],
  },
  {
    name: "Property three — apartment turnover",
    body: "Fixtures, tile, grout and finish work handled in a single coordinated visit, with the common areas cleaned and repainted before tenants returned Monday morning.",
    hero: {
      photo: "restroom-refresh",
      alt: "Refreshed unit bathroom",
      caption: "Fixtures, tile and grout completed in one visit.",
    },
    tiles: [
      {
        photo: "labeled-moving-box",
        alt: "Unit being packed out",
        caption: "Before — vacated unit.",
      },
      { photo: "wall-sanding", alt: "Sanding wall surfaces", caption: "Surface prep." },
      { photo: "roller-painting", alt: "Rolling paint on a wall", caption: "Unit repaint." },
      {
        photo: "interior-refinished-living-room",
        alt: "Replaced flooring",
        caption: "Flooring replacement.",
      },
    ],
  },
  {
    name: "Property four — business park",
    body: "Paint, carpet cleaning and punch-list repairs completed between tenants, including lighting and hardware replacement, so the suites went straight from walkthrough to first meeting.",
    hero: {
      photo: "conference-room",
      alt: "Conference room ready for business",
      caption: "Repainted and cleaned between tenants.",
    },
    tiles: [
      {
        photo: "carpenter-drilling",
        alt: "Repairing door hardware",
        caption: "Hardware and door repair.",
      },
      {
        photo: "washing-exterior-wall",
        alt: "Pressure washing the exterior",
        caption: "Exterior pressure washing.",
      },
      { photo: "raking-debris", alt: "Clearing grounds debris", caption: "Grounds cleanup." },
      {
        photo: "interior-open-plan-kitchen",
        alt: "Suite finished and ready to occupy",
        caption: "After — ready to occupy.",
      },
    ],
  },
];
