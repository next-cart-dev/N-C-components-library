import { styled } from "../../stitches.config"

export const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  fontSize: "$14",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "$normal",
  letterSpacing: "1.2px",
  gap: "$16",
  boxSizing: "border-box",
  borderRadius: "4px",
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        background: "linear-gradient(90deg, #2E3B59 0%, #455473 100%)",
        color: "$neutral100",
        "& svg path": {
          fill: "$text200"
        },
        "&:hover": {
          background: "$secondary700"
        },
        "&:disabled": {
          color: "$neutral700",
          background: "$neutral500",
          "& svg path": {
            fill: "$neutral700"
          }
        }
      },
      secondary: {
        background: "transparent",
        color: "$primary500",
        "& svg path": {
          fill: "$primary500"
        },
        border: "1px solid $primary500",
        "&:hover": {
          background: "$primary200",
          "& svg path": {
            fill: "$primary500"
          }
        },
        "&:disabled": {
          color: "$neutral700",
          background: "$neutral500",
          borderColor: "$neutral700",
          "& svg path": {
            fill: "$neutral700"
          }
        }
      }
    },
    size: {
      small: {
        padding: "$2 $16",
        height: "32px"
      },
      medium: {
        padding: "0 $16",
        height: "40px"
      },
      large: {
        padding: "0 $16",
        height: "48px"
      },
      fullWidth: {
        height: "40px",
        width: "100%"
      }
    }
  }
})
