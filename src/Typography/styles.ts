import { styled } from "../stitches.config"

export const Typography = styled("div", {
  margin: "$0",
  color: "$text500",
  variants: {
    variant: {
      h1: {
        fontSize: "$32"
      },
      h2: {
        fontSize: "$22"
      },
      body1: {
        fontSize: "$18"
      },
      body2: {
        fontSize: "$16"
      },
      body3: {
        fontSize: "$14"
      }
    }
  }
})
