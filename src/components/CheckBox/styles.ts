import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { styled } from "../../stitches.config"

export const WrapperCheckBox = styled("div", {
  alignItems: "center",
  display: "flex"
})

export const StyledCheckBox = styled(CheckboxPrimitive.Root, {
  backgroundColor: "transparent",
  width: "16px",
  height: "16px",
  border: "1px solid $primary500",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed",
    borderColor: "$neutral600",
    "& + label": {
      cursor: "not-allowed",
      color: "$neutral600"
    }
  }
})

export const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: "$neutral200",
  backgroundColor: "$primary500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  "& svg path": {
    fill: "$neutral200"
  },
  "& svg": {
    width: "20px",
    height: "20px"
  }
})

export const Label = styled("label", {
  color: "$text500",
  fontSize: "$14",
  marginLeft: "$8",
  fontWeight: "$normal",
  letterSpacing: "1.2px",
  cursor: "pointer",
  userSelect: "none"
})
