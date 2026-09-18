import type { ImageName } from "./images.generated";

/** About page content, from templates/marketing-site/About.dc.html. */

export const aboutHero = {
  eyebrow: "About us",
  titleTop: "One team for everything.",
  copy: "Contractors Only coordinates the trades that get properties ready — so you make one call instead of ten. Currently serving the Seattle, Portland and Los Angeles regions.",
  photo: "crew-collaborating-site" as ImageName,
  alt: "Crew collaborating on a job site",
};

export const values = {
  body: "We choose people over projects — building trust through relationships and putting people at the heart of everything we do. Our team values transparency with clients, tight coordination between trades, and an ownership culture where one person is accountable for your property from the first walkthrough to the final invoice.",
  pullquote:
    "Trust is built on a walkthrough, a straight answer and a crew that shows up when it said it would.",
  photo: "handshake-senior-client" as ImageName,
  alt: "Handshake with a client after a walkthrough",
};

export const culture: { photo: ImageName; alt: string; title: string; body: string }[] = [
  {
    photo: "crew-talking-outdoor",
    alt: "Crew talking through the day's scope",
    title: "We walk it together",
    body: "Every job starts with a walkthrough and a straight answer on what it needs.",
  },
  {
    photo: "crew-reviewing-tablet",
    alt: "Crew reviewing the schedule on a tablet",
    title: "One schedule",
    body: "Trades are sequenced to overlap, so the days come back to you.",
  },
  {
    photo: "crew-smiling-hardhats",
    alt: "Crew on site between tasks",
    title: "People over projects",
    body: "Crews who take pride in the work do better work. That shows up in the finish.",
  },
];

export const team = [
  { name: "Phillip Tran", role: "Project Manager" },
  { name: "Ryan Keliher", role: "Project Manager" },
  { name: "Phuong Nguyen", role: "Principal Designer" },
  { name: "Andrew Lacko", role: "Principal Architect" },
  { name: "Lisa Keliher", role: "Project Coordinator" },
];
