import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: { open: true },
  build: { outDir: "build" },
  environments: {
    ssr: { build: { outDir: "build/server" } },
  },
  plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter(), tsconfigPaths()],
});
