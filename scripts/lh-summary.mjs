import { readFileSync } from "node:fs";

const file = process.argv[2];
const lhr = JSON.parse(readFileSync(file, "utf8"));
const a = lhr.audits;
const num = (id) => a[id]?.numericValue;
const fmtMs = (v) => (v == null ? "n/a" : `${(v / 1000).toFixed(2)}s`);
const fmtScore = (s) => (s == null ? "n/a" : Math.round(s * 100));

console.log(`URL: ${lhr.finalUrl}`);
console.log(`Form factor: ${lhr.configSettings.formFactor}`);
console.log(`Performance score: ${fmtScore(lhr.categories.performance?.score)}`);
console.log(`LCP: ${fmtMs(num("largest-contentful-paint"))}`);
console.log(`CLS: ${a["cumulative-layout-shift"]?.displayValue ?? "n/a"}`);
console.log(`TBT: ${fmtMs(num("total-blocking-time"))}`);
console.log(`FCP: ${fmtMs(num("first-contentful-paint"))}`);
console.log(`Speed Index: ${fmtMs(num("speed-index"))}`);
console.log(`Total byte weight: ${(num("total-byte-weight") / 1024 / 1024).toFixed(2)} MB`);
console.log(`Requests: ${a["network-requests"]?.details?.items?.length ?? "n/a"}`);
