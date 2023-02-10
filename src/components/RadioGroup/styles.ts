import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { styled } from "../../stitches.config"

export const RadioGroupRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  width: 16,
  height: 16,
  borderRadius: "100%",
  border: "1px solid $primary500",
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed",
    borderColor: "$neutral600",
    "& + label": {
      color: "$neutral600",
      cursor: "not-allowed"
    }
  }
})

export const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "$primary500"
  }
})

export const Label = styled("label", {
  fontSize: "$16",
  letterSpacing: "1.2px",
  color: "$text500",
  cursor: "pointer"
})

export const RadioGroup = styled(RadioGroupPrimitive.Root)
