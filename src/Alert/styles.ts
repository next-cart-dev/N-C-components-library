import { styled } from "../stitches.config"

export const Alert = styled("div", {
  width: 425,
  padding: "$8 $16",
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  variants: {
    variant: {
      info: {
        backgroundColor: "$info300",
        color: "$info700"
      },
      warning: {
        backgroundColor: "$warning300",
        color: "$warning700"
      },
      success: {
        backgroundColor: "$success300",
        color: "$success700"
      },
      danger: {
        backgroundColor: "$danger300",
        color: "$danger700"
      }
    }
  }
})

export const AlertTitle = styled("span", {
  fontSize: "$18",
  fontWeight: "bold",
  letterSpacing: 1
})

export const AlertMessage = styled("span", {
  fontSize: "$16",
  fontWeight: "$normal",
  letterSpacing: 1.25
})

export const TextSection = styled("div", {
  display: "flex",
  flexFlow: "column"
})
