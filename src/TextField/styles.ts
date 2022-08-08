import { styled } from "../stitches.config"

export const Input = styled("input", {
  $$borderColor: "$colors$primary700",
  $$disabledBorderColor: "$colors$text400",
  $$dangerBorderColor: "$colors$danger500",
  $$successBorderColor: "$colors$tertiary500",
  padding: "14px $md",
  fontSize: "$14",
  background: "$neutral200",
  color: "$text700",
  fontWeight: "$normal",
  letterSpacing: "$0.5",
  border: "none",
  borderRadius: 4,
  boxShadow: "0 0 0 1px $$borderColor",
  outline: "none",
  transition: "box-shadow 0.3s ease-in-out, background 0.1s ease-in-out",
  "&:hover": {
    background: "$primary200"
  },
  "&:disabled": {
    boxShadow: "0 0 0 1px $$disabledBorderColor",
    background: "#fff"
  },
  "&::placeholder": {
    color: "$text400"
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 2px $$borderColor"
  },
  variants: {
    inputSize: {
      default: {
        width: "200px"
      },
      fullWidth: {
        width: "100%"
      }
    },
    variant: {
      success: {
        boxShadow: "0 0 0 1px $$successBorderColor",
        "&:focus-visible": {
          boxShadow: "0 0 0 2px $$successBorderColor"
        },
        "&::placeholder": {
          color: "$tertiary500"
        }
      },
      danger: {
        boxShadow: "0 0 0 1px $$dangerBorderColor",
        "&:focus-visible": {
          boxShadow: "0 0 0 2px $$dangerBorderColor"
        },
        "&::placeholder": {
          color: "$danger500"
        }
      }
    }
  }
})
