import { styled } from "../../stitches.config"

export const FormLabel = styled("label", {
  marginBottom: "$xs",
  fontSize: "$14",
  letterSpacing: "$0.5",
  color: "$primary500",
  display: "block",
  variants: {
    variant: {
      disabled: {
        color: "$text300"
      },
      danger: {
        color: "$danger500"
      },
      success: {
        color: "$tertiary500"
      },
      warning: {
        color: "$warning500"
      },
      info: {
        color: "$info500"
      }
    }
  }
})
