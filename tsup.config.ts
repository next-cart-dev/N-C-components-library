import svgrPlugin from "esbuild-plugin-svgr"
import { defineConfig } from "tsup"

export default defineConfig({
  esbuildPlugins: [svgrPlugin()],
  entry: ["src/index.tsx"],
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  format: ["cjs", "esm"]
})
