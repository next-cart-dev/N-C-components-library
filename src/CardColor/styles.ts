import { styled } from "../stitches.config"

export const Color = styled("div", {
  width: "100%",
  height: "50%",
  borderRadius: "10px 10px 0 0"
})

export const ColorContainer = styled("div", {
  background: "white",
  width: "200px",
  height: "200px",
  borderRadius: "10px",
  display: "flex",
  gap: "$24",
  flexDirection: "column",
  boxShadow: "$shadow$md1"
})

export const ColorName = styled("div", {
  display: "flex",
  alignItems: "left",
  gap: "$8",
  flexDirection: "column"
})

export const Span = styled("span", {
  variants: {
    variant: {
      primary: {
        color: "$text700",
        fontSize: "$18"
      },
      secondary: {
        color: "$text400"
      }
    }
  },
  marginLeft: "$32"
})
