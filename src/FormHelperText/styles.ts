import { styled } from "../stitches.config"

export const FormHelperText = styled("p", {
  fontSize: "$12",
  marginTop: "6px",
  marginLeft: "$8",
  marginBottom: "0",
  color: "$text400",
  variants: {
    variant: {
      danger: {
        color: "$danger500"
      },
      success: {
        color: "$tertiary500"
      }
    }
  }
})
