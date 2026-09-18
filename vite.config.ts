import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    // Baked in at build time. Calling `new Date()` in a component instead would
    // make the prerendered HTML and the hydrating client disagree once the year
    // rolls over, which React reports as a hydration mismatch.
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
  plugins: [reactRouter()],
  resolve: {
    // Native in Vite 8 — replaces the vite-tsconfig-paths plugin.
    tsconfigPaths: true,
  },
  build: {
    // Cloudflare serves brotli/gzip at the edge; skipping the extra local
    // compression report shaves build time without changing output.
    reportCompressedSize: false,
    cssMinify: "lightningcss",
  },
});
