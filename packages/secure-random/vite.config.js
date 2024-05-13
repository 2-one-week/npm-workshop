import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      name: "@2-one-week/secure-random",
      entry: "./src/index.ts",
      formats: ["cjs", "es"],
    },
  },
});
