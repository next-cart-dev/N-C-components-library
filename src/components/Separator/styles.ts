import { styled } from "../../stitches.config"

export const Separator = styled("div", {
  variants: {
    variant: {
      solid: {
        borderTop: "1px solid $primary500"
      },
      dashed: {
        borderTop: "1px dashed $primary500"
      }
    }
  }
})
