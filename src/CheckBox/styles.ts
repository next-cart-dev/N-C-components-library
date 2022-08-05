import { styled } from "../stitches.config"

export const WrapperCheckBox = styled("div", {
  alignItems: "center",
  display: "flex"
})

export const StyledCheckBox = styled("button", {
  backgroundColor: "$neutral200",
  width: "16px",
  height: "16px",
  border: "1px solid $primary700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed"
  }
})

export const StyledIndicator = styled("span", {
  color: "$neutral200",
  backgroundColor: "$primary700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& svg path": {
    fill: "$neutral200"
  },
  "& svg": {
    width: "16px"
  }
})

export const Label = styled("label", {
  color: "$primary700",
  fontSize: "$14",
  marginLeft: "10px"
})
