import { styled } from "../stitches.config"

export const Icon = styled("span", {
  display: "inherit",
  variants: {
    variant: {
      primary: {
        "& svg": {
          fill: "$neutral100"
        }
      },
      secondary: {
        "& svg": {
          fill: "$secondary400"
        }
      }
    },
    size: {
      small: {
        "& svg": {
          width: "12px",
          height: "12px"
        }
      },
      normal: {
        "& svg": {
          width: "16px",
          height: "16px"
        }
      },
      large: {
        "& svg": {
          width: "24px",
          height: "24px"
        }
      }
    }
  }
})
