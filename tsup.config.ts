import svgrPlugin from "esbuild-plugin-svgr"
import { defineConfig } from "tsup"

// TODO: Verificar se plugin é realmente necessário
export default defineConfig({
  // esbuildPlugins: [svgrPlugin()],
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
