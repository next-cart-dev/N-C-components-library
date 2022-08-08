import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import external from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser"

const plugins = [
  external(),
  resolve(),
  commonjs(),
  babel({
    babelHelpers: "runtime",
    plugins: ["@babel/plugin-transform-runtime"]
  }),
  typescript({
    tsconfig: "./tsconfig.json",
    outDir: "dist",
    declarationDir: "dist"
  }),
  image(),
  terser()
]

export default [
  {
    input: "src/index.tsx",
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true
    },
    plugins
  },
  {
    input: "src/index.tsx",
    output: {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    },
    plugins
  }
]
