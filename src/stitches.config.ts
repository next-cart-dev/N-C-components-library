import { createStitches } from "@stitches/react"

import { lightTheme } from "./tokens"

export const { styled, getCssText, globalCss } = createStitches(lightTheme)

export const globalStyles = globalCss({
  "*": { boxSizing: "border-box" }
})
