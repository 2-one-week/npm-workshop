import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import preserveDirectives from "rollup-plugin-preserve-directives";
import packageJSON from "./package.json";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true }), react()],
  build: {
    lib: {
      name: "@oneweek.lee/secure-dice",
      entry: {
        index: "./src/index.ts",
      },
      formats: ["cjs", "es"],
    },
    ssr: true,
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        ...Object.keys(packageJSON?.dependencies || []),
        ...Object.keys(packageJSON?.peerDependencies || []),
      ],
      output: {
        preserveModules: true,
      },
      plugins: [preserveDirectives()],
    },
  },
});
