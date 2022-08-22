import { styled } from "@stitches/react"

export const BreadcrumbsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "10px"
})

export const Step = styled("a", {
  variants: {
    variant: {
      primary: {
        color: "$primary500",
        cursor: 'default',
        textDecoration: "none"
      },
      secondary: {
        color: "$primary500",
        textDecoration: "underline"
      }
    }
  },
  textTransform: "capitalize",
  cursor: "pointer",
  fontFamily: "$fonts$roboto"
})
