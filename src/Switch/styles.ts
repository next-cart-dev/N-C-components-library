import * as SwitchPrimitive from "@radix-ui/react-switch"
import { styled } from "@stitches/react"

export const SwitchStyled = styled(SwitchPrimitive.Switch, {
  all: "unset",
  cursor: "pointer",
  width: "43px",
  height: "23px",
  position: "relative",
  borderRadius: "9999px",
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: /* "$neutral600" */ "#ABA6C2",
        "&:focus": { boxShadow: `0 0 0 2px $primary700` },
        '&[data-state="checked"]': { backgroundColor: "$primary700" }
      },
      neutral: {
        backgroundColor: /* "$neutral600" */ "#DBDBDB",
        "&:focus": { boxShadow: `0 0 0 2px primary700` },
        '&[data-state="checked"]': { backgroundColor: "$primary400" }
      }
    }
  }
})

export const SwitchThumbStyled = styled(SwitchPrimitive.SwitchThumb, {
  display: "block",
  width: "17px",
  height: "17px",
  borderRadius: "9999px",
  transition: "transform 100ms",
  transform: "translateX(1px)",
  marginLeft: "3px",
  willChange: "transform",
  backgroundColor: "$neutral200",
  '&[data-state="checked"]': { transform: "translateX(19px)" }
})

export const Label = styled("label", {
  color: "$primary900",
  fontWeight: "$semibold",
  letterSpacing: "$0.4",
  fontSize: "$16"
})
