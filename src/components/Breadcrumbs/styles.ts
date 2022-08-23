import { styled } from "@stitches/react"
import { AiFillStar } from "react-icons/all"

export const BreadcrumbsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "10px"
})

export const Step = styled("a", {
  color: '$primary500',
  variants: {
    variant: {
      primary: {
        cursor: 'default',
        textDecoration: "none"
      },
      secondary: {
        textDecoration: "underline"
      }
    }
  },
  textTransform: "capitalize",
  cursor: "pointer",
  fontFamily: "$fonts$roboto"
})

export const BreadcrumbIcon = styled(AiFillStar, {
  color: '$primary500'
})