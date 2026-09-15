import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  future: {
    // Splits each route's loader/action code from its component code, so the
    // client only downloads what a given navigation actually needs.
    v8_splitRouteModules: true,
  },
} satisfies Config;
