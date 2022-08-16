import { styled } from "../stitches.config"

export const FormLabel = styled("label", {
  marginBottom: "$8",
  fontSize: "$14",
  letterSpacing: "$0.5",
  color: "$primary500",
  display: "block",
  variants: {
    mode: {
      disabled: {
        color: "$text300"
      },
      danger: {
        color: "$danger500"
      },
      success: {
        color: "$tertiary500"
      }
    }
  }
})
