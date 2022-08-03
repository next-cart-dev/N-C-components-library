import { styled } from "../stitches.config"

export const Input = styled("input", {
  width: "200px",
  padding: "14px $md",
  fontSize: "$14",
  background: "$background100",
  color: "$text500",
  border: "none",
  boxShadow: "0 0 0 1px $inputBlueBorder",
  outline: "none",
  transition: "box-shadow 0.1s ease-in-out, background 0.1s ease-in-out",
  variants: {
    variant: {
      success: {},
      danger: {
        boxShadow: "0 0 0 1px $inputDangerBorder"
      }
    }
  },
  "&:hover": {
    background: "$background300"
  },
  "&:disabled": {
    boxShadow: "0 0 0 1px $inputDisabledBorder",
    background: "#fff"
  },
  "&::placeholder": {
    color: "$text300"
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 2px $inputBlueBorder"
  }
})
