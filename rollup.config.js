import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import external from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser"

const input = "src/index.tsx"

const plugins = [
  babel({
    exclude: "node_modules/**",
    presets: ["@babel/preset-react"],
    babelHelpers: "runtime",
    plugins: ["@babel/plugin-transform-runtime"]
  }),
  external(),
  commonjs({
    include: ["node_modules/**"]
  }),
  resolve(),
  typescript(),
  image(),
  terser()
]

export default [
  {
    input,
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true
    },
    plugins
  },
  {
    input,
    output: {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
      sourcemap: true
    },
    plugins
  }
]
