import { styled } from "../../stitches.config"

export const FormLabel = styled("label", {
  marginBottom: "$8",
  fontSize: "$14",
  letterSpacing: "1.2px",
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
      },
      mobile: {
        color: "$secondary500"
      }
    }
  }
})
