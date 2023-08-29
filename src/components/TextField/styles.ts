import { styled } from "../../stitches.config"

export const ADORNMENT_PADDING = 12
export const INPUT_SIZE = "300px"

export const Input = styled("input", {
  $$borderColor: "$colors$primary700",
  $$disabledBorderColor: "$colors$text400",
  $$dangerBorderColor: "$colors$danger500",
  $$successBorderColor: "$colors$tertiary500",
  $$infoBorderColor: "$colors$info500",
  $$warningBorderColor: "$colors$warning500",
  // See more about the fix here: https://codepen.io/vassi/pen/ojrwYm
  "-webkit-appearance": "none",
  padding: "0 $16",
  fontSize: "$14",
  height: "40px",
  background: "$neutral200",
  color: "$text700",
  fontWeight: "$normal",
  letterSpacing: "1.2px",
  borderRadius: "4px",
  border: "1px solid $$borderColor",
  outline: "none",
  transition: "box-shadow 0.3s ease-in-out, background 0.1s ease-in-out",
  "&:hover": {
    background: "$primary200"
  },
  "&:disabled": {
    border: "1px solid $$disabledBorderColor",
    background: "#fff"
  },
  "&::placeholder": {
    color: "$text400"
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 1px $$borderColor"
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
        border: "1px solid $$successBorderColor",
        "&:hover": {
          background: "$success200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 1px $$successBorderColor"
        },
        "&::placeholder": {
          color: "$tertiary500"
        }
      },
      danger: {
        border: "1px solid $$dangerBorderColor",
        "&:hover": {
          background: "$danger200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 1px $$dangerBorderColor"
        },
        "&::placeholder": {
          color: "$danger500"
        }
      },
      info: {
        border: "1px solid $$infoBorderColor",
        "&:hover": {
          background: "$info200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 1px $$infoBorderColor"
        },
        "&::placeholder": {
          color: "$info500"
        }
      },
      warning: {
        border: "1px solid $$warningBorderColor",
        "&:hover": {
          background: "$warning200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 1px $$warningBorderColor"
        },
        "&::placeholder": {
          color: "$warning500"
        }
      },
      mobile: {
        boxShadow: "0 0 0 1px $colors$secondary500",
        "&:hover": {
          background: "$primary200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 2px $colors$secondary500"
        },
        "&::placeholder": {
          color: "$colors$text400"
        },
        fontSize: "15px"
      }
    }
  }
})

export const InputAdornment = styled("div", {
  backgroundColor: "$primary500",
  position: "absolute",
  height: "100%",
  padding: "12px 14px",
  fontSize: "$14",
  letterSpacing: "1.2px",
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
      },
      mobile: {
        boxShadow: "0 0 0 1px $colors$secondary500",
        "&:hover": {
          background: "$primary200"
        },
        "&:focus-visible": {
          boxShadow: "0 0 0 2px $colors$secondary500"
        },
        "&::placeholder": {
          color: "$colors$text400"
        }
      }
    }
  }
})
