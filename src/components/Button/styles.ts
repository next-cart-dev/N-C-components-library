import { styled } from "../../stitches.config"

export const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  fontSize: "$18",
  display: "flex",
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
        background: "$neutral200",
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
        fontSize: "$16",
        height: "$space$32"
      },
      normal: {
        padding: "0 $16",
        height: "$space$40",
      },
      large: {
        padding: "0 $16",
        height: "$space$48",
      }
    }
  }
})
