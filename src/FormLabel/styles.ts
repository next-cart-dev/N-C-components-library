import { styled } from "../stitches.config"

export const FormLabel = styled("label", {
  marginBottom: "$xs",
  fontSize: "$14",
  color: "$text500",
  display: "block",
  variants: {
    mode: {
      disabled: {
        color: "$text300"
      }
    }
  }
})
