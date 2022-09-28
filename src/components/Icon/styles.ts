import { styled } from "../../stitches.config"

export const Icon = styled("span", {
  display: "inherit",
  variants: {
    size: {
      small: {
        "& svg": {
          width: "12px",
          height: "12px"
        }
      },
      medium: {
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
