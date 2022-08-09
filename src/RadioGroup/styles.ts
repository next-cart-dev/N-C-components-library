import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { styled } from "../stitches.config"

export const StyledRadio = styled(RadioGroupPrimitive.Item, {
  $$borderColor: "$colors$primary700",
  $$disabledBorderColor: "$colors$text400",
  all: "unset",
  backgroundColor: "white",
  width: 16,
  height: 16,
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "4px",
  textAlign: "center",
  boxShadow: "0 0 0 1px $$borderColor",
  transition: "box-shadow 0.3s ease-in-out, $$borderColor 0.1s ease-in-out",
  "&:hover": {
    boxShadow: "0 0 0 2px $$borderColor"
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 2px $$borderColor"
  },
  "&:disabled": {
    cursor: "not-allowed",
    boxShadow: "0 0 0 1px $$disabledBorderColor"
  }
})

export const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "10px",
  height: "10px",
  position: "relative",
  borderRadius: "50%",
  backgroundColor: "$primary700",
  "&::after": {
    content: " "
  }
})
export const Label = styled("label", {
  color: "$primary700",
  fontWeight: "400",
  fontSize: "$14",
  margin: "7px"
})

export const WrapperRadioGroup = styled(RadioGroupPrimitive.RadioGroup, {
  variants: {
    position: {
      flex: {
        display: "flex",
        "span ": {
          display: "flex",
          alignItems: "center"
        }
      },
      block: {
        display: "block",
        "span ": {
          display: "flex",
          alignItems: "center"
        }
      }
    }
  }
})
