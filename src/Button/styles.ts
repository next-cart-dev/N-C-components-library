import { styled } from "../stitches.config"

export const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  fontSize: "$18",
  display: "flex",
  height: "48px",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "$semibold",
  letterSpacing: "$0.4",
  gap: "$16",
  borderRadius: "4px",
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        background: "$primary500",
        color: "$neutral100",
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
        background: "$neutral200",
        color: "$primary500",
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
        padding: "0 $8"
      },
      normal: {
        padding: "0 $16"
      },
      large: {
        padding: "0 $24"
      }
    }
  }
})
