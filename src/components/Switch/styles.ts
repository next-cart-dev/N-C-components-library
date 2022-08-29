import * as SwitchPrimitive from "@radix-ui/react-switch"

import { styled } from "../../stitches.config"

export const Switch = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: 42,
  height: 25,
  backgroundColor: "$primary400",
  borderRadius: "9999px",
  position: "relative",
  cursor: "pointer",
  '&[data-state="checked"]': { backgroundColor: "$primary700" },
  "&:disabled": {
    backgroundColor: "$neutral600",
    cursor: "not-allowed",
    "& + label": {
      cursor: "not-allowed"
    }
  }
})

export const Thumb = styled(SwitchPrimitive.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "white",
  borderRadius: "9999px",
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" }
})

export const Label = styled("label", {
  fontSize: "$18",
  letterSpacing: "1.2px",
  marginLeft: "$8",
  cursor: "pointer",
  userSelect: "none"
})
