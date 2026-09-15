// One-off/reusable asset pipeline: source photos + logo -> resized, compressed,
// content-hashed WebP files in public/assets/photos, plus a generated manifest
// (app/data/images.generated.ts) the app imports instead of raw string paths.
// Run with: node scripts/optimize-images.mjs  (requires `sharp`; see package.json
// devDependencies note below if it's been removed after a one-time run).
import sharp from "sharp";
import { createHash } from "node:crypto";
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC_DIR = path.join(ROOT, "source-assets", "photos");
const OUT_DIR = path.join(ROOT, "public", "assets", "photos");
const LOGO_SRC = path.join(ROOT, "source-assets", "logo-lockup.png");
const LOGO_OUT_DIR = path.join(ROOT, "public", "assets");
const FAVICON_SRC = path.join(ROOT, "source-assets", "logo-mark.png");
const MANIFEST_PATH = path.join(ROOT, "app", "data", "images.generated.ts");

const PHOTO_VARIANTS = [
  { key: "tile", width: 700, quality: 78 },
  { key: "full", width: 1600, quality: 76 },
];

function hashOf(buf) {
  return createHash("sha256").update(buf).digest("hex").slice(0, 10);
}

async function buildPhoto(file) {
  const name = path.basename(file, path.extname(file));
  const srcPath = path.join(SRC_DIR, file);
  const variants = {};
  for (const v of PHOTO_VARIANTS) {
    const buf = await sharp(srcPath)
      .rotate() // auto-orient from EXIF before resizing — sharp otherwise resizes
      // the raw sensor pixels and drops the orientation tag, silently baking in a
      // sideways/upside-down image for any photo that needed EXIF rotation.
      .resize({ width: v.width, withoutEnlargement: true })
      .webp({ quality: v.quality, effort: 6 })
      .toBuffer();
    const hash = hashOf(buf);
    const outName = `${name}-${v.key}.${hash}.webp`;
    writeFileSync(path.join(OUT_DIR, outName), buf);
    variants[v.key] = `/assets/photos/${outName}`;
  }
  return [name, variants];
}

async function buildLogo() {
  const meta = await sharp(LOGO_SRC).metadata();
  const targetHeight = 192; // 3x safety margin over the largest on-page display height (64px)
  const targetWidth = Math.round((meta.width / meta.height) * targetHeight);
  const buf = await sharp(LOGO_SRC)
    .resize({ height: targetHeight, width: targetWidth })
    .webp({ quality: 92, effort: 6 })
    .toBuffer();
  const hash = hashOf(buf);
  const outName = `logo-lockup.${hash}.webp`;
  writeFileSync(path.join(LOGO_OUT_DIR, outName), buf);
  return { url: `/assets/${outName}`, width: targetWidth, height: targetHeight, aspectRatio: `${meta.width}/${meta.height}` };
}

async function buildFavicon() {
  const buf = await sharp(FAVICON_SRC)
    .resize({ width: 256, withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer();
  writeFileSync(path.join(LOGO_OUT_DIR, "logo-mark.png"), buf);
}

mkdirSync(OUT_DIR, { recursive: true });
for (const f of readdirSync(OUT_DIR)) {
  if (f.endsWith(".webp")) rmSync(path.join(OUT_DIR, f));
}
for (const f of readdirSync(LOGO_OUT_DIR)) {
  if (/^logo-lockup\..*\.webp$/.test(f)) rmSync(path.join(LOGO_OUT_DIR, f));
}

const photoFiles = readdirSync(SRC_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
const entries = await Promise.all(photoFiles.map(buildPhoto));
const logo = await buildLogo();
await buildFavicon();

const manifestLines = [
  "// GENERATED FILE — do not edit by hand. Re-run `node scripts/optimize-images.mjs`.",
  'export interface ImageVariants {',
  "  tile: string;",
  "  full: string;",
  "}",
  "",
  "export const PHOTOS: Record<string, ImageVariants> = {",
  ...entries
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, v]) => `  "${name}": { tile: "${v.tile}", full: "${v.full}" },`),
  "};",
  "",
  `export const LOGO_LOCKUP = { src: "${logo.url}", width: ${logo.width}, height: ${logo.height}, aspectRatio: "${logo.aspectRatio}" };`,
  "",
];
writeFileSync(MANIFEST_PATH, manifestLines.join("\n"));

console.log(`Wrote ${entries.length * PHOTO_VARIANTS.length} photo variants + logo + favicon.`);
console.log(`Manifest: ${path.relative(ROOT, MANIFEST_PATH)}`);
