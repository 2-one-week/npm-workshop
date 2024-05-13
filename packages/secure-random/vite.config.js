import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      name: "@2-one-week/secure-random",
      entry: {
        index: "./src/index.ts",
        client: "./src/client.ts",
        server: "./src/server.ts",
      },
      formats: ["cjs", "es"],
    },
  },
});
