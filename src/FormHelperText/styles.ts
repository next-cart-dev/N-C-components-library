import { styled } from "../stitches.config"

export const FormHelperText = styled("p", {
  display: "flex",
  fontSize: "$12",
  marginTop: 6,
  paddingLeft: "$xs",
  marginBottom: 0,
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
