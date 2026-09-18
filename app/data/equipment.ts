import type { ImageName } from "./images.generated";

/** Equipment page content, from templates/marketing-site/Equipment.dc.html. */

export const equipmentHero = {
  eyebrow: "Equipment",
  titleTop: "We own it.",
  titleAccent: "It shows up.",
  copy: "Trucks, vans, trailers and tools — all in house. No rental counters, no waiting on a delivery window, no day-rate surprises on your invoice.",
  photo: "roof-replacement-crew" as ImageName,
  alt: "Crew working a property exterior",
};

/**
 * `photo` is optional: the design marks several units as "Photo needed"
 * placeholders because no shot was supplied. Those render as a titled panel
 * rather than a broken image or an authoring placeholder.
 */
export type Unit = { name: string; spec?: string; photo?: ImageName };

export const fleetRows: { label: string; blurb: string; units: Unit[] }[] = [
  {
    label: "Vehicles",
    blurb: "Sized to the job, from a single service call to a full turnover.",
    units: [
      { name: "Box truck", spec: "Full turnovers and bulk material runs." },
      {
        name: "Sprinter van",
        spec: "High-roof capacity for interior trades.",
        photo: "work-van-at-house",
      },
      {
        name: "Cargo van",
        spec: "Service calls and punch-list work.",
        photo: "van-in-neighborhood",
      },
      {
        name: "Ford truck",
        spec: "Tows every trailer in the fleet.",
        photo: "service-van-worker",
      },
    ],
  },
  {
    label: "Trailers",
    blurb:
      "Trade-specific packouts stay loaded, so crews work instead of making supply runs.",
    units: [
      {
        name: "Equipment trailer",
        spec: "Mowers, lifts and heavy equipment.",
        photo: "trailer-exterior",
      },
      {
        name: "Flooring & painting trailer",
        spec: "Flooring, paint and install tools.",
        photo: "trailer-interior",
      },
      { name: "Landscaping trailer", spec: "Mowers, trimmers, blowers and debris." },
      {
        name: "Open trailer",
        spec: "Demo, cleanout and haul-off loads.",
        photo: "trailer-packout",
      },
    ],
  },
];

export const toolRows: { label: string; blurb: string; items: Unit[] }[] = [
  {
    label: "Flooring",
    blurb: "Everything an install crew needs, staged before the truck leaves.",
    items: [
      { name: "Tile saws" },
      { name: "Flooring nailers" },
      { name: "Hand tools & fasteners", photo: "carpentry-tools-overhead" },
      { name: "Layout & levels", photo: "laser-level-layout" },
      { name: "Bits & fasteners", photo: "organized-drill-bits" },
    ],
  },
  {
    label: "Specialty equipment",
    blurb: "Height access and heavy cutting we own outright — no day-rate rentals.",
    items: [
      { name: "Snorkel lift", photo: "exterior-work-lift" },
      { name: "Genie lift" },
      { name: "John Deere 1", photo: "mowing-lawn" },
      { name: "John Deere 2" },
      { name: "Tow cutter" },
    ],
  },
];
