import { styled } from "../../stitches.config"

export const TextArea = styled("textarea", {
  $$borderColor: "$colors$primary700",
  $$disabledBorderColor: "$colors$text400",
  $$dangerBorderColor: "$colors$danger500",
  $$successBorderColor: "$colors$tertiary500",
  $$infoBorderColor: "$colors$info500",
  $$warningBorderColor: "$colors$warning500",
  // See more about the fix here: https://codepen.io/vassi/pen/ojrwYm
  "-webkit-appearance": "none",
  padding: "12px $8",
  fontSize: "$18",
  width: "100%",
  resize: "none",
  minHeight: "110px",
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
