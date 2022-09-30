import { styled } from "../../stitches.config"
import { Button } from "../Button"

export const IconButton = styled(Button, {
  variants: {
    size: {
      small: {
        height: "32px",
        width: "32px",
        padding: "$0"
      },
      medium: {
        height: "48px",
        width: "48px",
        padding: "$0"
      },
      large: {
        height: "52px",
        width: "52px",
        padding: "$0"
      }
    }
  }
})
