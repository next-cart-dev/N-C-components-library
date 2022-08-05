import svgrPlugin from "esbuild-plugin-svgr"
import { defineConfig } from "tsup"

export default defineConfig({
  esbuildPlugins: [svgrPlugin()],
  entry: ["src/index.tsx"],
  sourcemap: true,
  clean: true,
  bundle: true,
  dts: true,
  minify: true,
  external: ["react"],
  format: ["cjs", "esm"],
  inject: ["src/react-shim.js"]
})
