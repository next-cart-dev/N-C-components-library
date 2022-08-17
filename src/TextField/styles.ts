import { styled } from "../stitches.config"

export const ADORNMENT_PADDING = 12
export const INPUT_SIZE = "300px"

export const Input = styled("input", {
  $$borderColor: "$colors$primary700",
  $$disabledBorderColor: "$colors$text400",
  $$dangerBorderColor: "$colors$danger500",
  $$successBorderColor: "$colors$tertiary500",
  $$infoBorderColor: "$colors$info500",
  $$warningBorderColor: "$colors$warning500",
  padding: "14px $16",
  fontSize: "$18",
  height: "48px",
  background: "$neutral200",
  color: "$text700",
  fontWeight: "$normal",
  letterSpacing: "$0.5",
  border: "none",
  borderRadius: "4px",
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
        width: INPUT_SIZE
      },
      fullWidth: {
        width: "100%"
      }
    },
    variant: {
      success: {
        boxShadow: "0 0 0 1px $$successBorderColor",
        "&:hover": {
          background: "$success200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 2px $$successBorderColor"
        },
        "&::placeholder": {
          color: "$tertiary500"
        }
      },
      danger: {
        boxShadow: "0 0 0 1px $$dangerBorderColor",
        "&:hover": {
          background: "$danger200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 2px $$dangerBorderColor"
        },
        "&::placeholder": {
          color: "$danger500"
        }
      },
      info: {
        boxShadow: "0 0 0 1px $$infoBorderColor",
        "&:hover": {
          background: "$info200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 2px $$infoBorderColor"
        },
        "&::placeholder": {
          color: "$info500"
        }
      },
      warning: {
        boxShadow: "0 0 0 1px $$warningBorderColor",
        "&:hover": {
          background: "$warning200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 2px $$warningBorderColor"
        },
        "&::placeholder": {
          color: "$warning500"
        }
      }
    }
  }
})

export const InputAdornment = styled("div", {
  backgroundColor: "$primary500",
  position: "absolute",
  height: "100%",
  padding: "12px 14px",
  color: "$neutral100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    variant: {
      success: {
        backgroundColor: "$tertiary500"
      },
      danger: {
        backgroundColor: "$danger500"
      },
      warning: {
        backgroundColor: "$warning500"
      },
      info: {
        backgroundColor: "$info500"
      }
    }
  }
})
