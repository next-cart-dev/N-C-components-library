import { styled } from "@stitches/react"

export const BreadcrumbsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "10px"
})

export const Step = styled("span", {
  variants: {
    variant: {
      primary: {
        // TODO: Substituir hex por token
        color: "#ACABAF"
      },
      secondary: {
        color: "$primary500"
      }
    }
  },
  textTransform: "capitalize",
  cursor: "pointer",
  fontFamily: "$fonts$roboto"
})
