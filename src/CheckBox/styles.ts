import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { styled } from "../stitches.config"

export const WrapperCheckBox = styled("div", {
  alignItems: "center",
  display: "flex"
})

export const StyledCheckBox = styled(CheckboxPrimitive.Root, {
  $$borderColor: "$colors$primary700",
  backgroundColor: "$neutral200",
  width: "20px",
  height: "20px",
  border: "1px solid $primary700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "box-shadow 0.3s ease-in-out, $$borderColor 0.1s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 0 0 1px $$borderColor"
  },
  "&:disabled": {
    cursor: "not-allowed"
  }
})

export const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: "$neutral200",
  backgroundColor: "$primary700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& svg path": {
    fill: "$neutral200"
  },
  "& svg": {
    width: "20px",
    height: "20px"
  }
})

export const Label = styled("label", {
  color: "$primary700",
  fontSize: "$14",
  marginRight: "15px",
  fontWeight: "bold"
})
