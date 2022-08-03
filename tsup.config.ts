import svgrPlugin from "esbuild-plugin-svgr"
import { defineConfig } from "tsup"

// TODO: Verificar se plugin é realmente necessário
export default defineConfig({
  // esbuildPlugins: [svgrPlugin()],
  entry: ["src/index.tsx"],
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  format: ["cjs", "esm"]
})
