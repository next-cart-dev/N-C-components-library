import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { styled, keyframes } from "../../stitches.config"

const slideUpAndFade = keyframes({
  "0%": { opacity: "0", transform: "translateY(2px)" },
  "100%": { opacity: "1", transform: "translateY(0)" }
})

const slideRightAndFade = keyframes({
  "0%": { opacity: "0", transform: "translateX(-2px)" },
  "100%": { opacity: "1", transform: "translateX(0)" }
})

const slideDownAndFade = keyframes({
  "0%": { opacity: "0", transform: "translateY(-2px)" },
  "100%": { opacity: "1", transform: "translateY(0)" }
})

const slideLeftAndFade = keyframes({
  "0%": { opacity: "0", transform: "translateX(2px)" },
  "100%": { opacity: "1", transform: "translateX(0)" }
})

export const StyledArrow = styled(DropdownMenu.Arrow, {
  fill: "white"
})

const StyledContent = {
  minWidth: "220px",
  backgroundColor: "white",
  borderRadius: "6px",
  padding: "5px",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
}

export const TriggerContainer = styled("div", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
})

export const DropdownMenuContent = styled(DropdownMenu.Content, {
  ...StyledContent
})

export const DropdownMenuLabel = styled(DropdownMenu.Label, {
  color: "$primary500",
  fontSize: "$14",
  margin: "$8"
})

const StyledItem = {
  all: "unset",
  fontSize: "$12",
  lineHeight: "1px",
  color: "$primary500",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  height: "25px",
  padding: "0 5px",
  position: "relative",
  paddingLeft: "25px",
  userSelect: "none",

  "&[data-disabled]": {
    color: "$text400",
    pointerEvents: "none"
  },

  "&[data-highlighted]": {
    backgroundColor: "$primary500",
    color: "$text100"
  }
}

export const DropdownMenuItem = styled(DropdownMenu.Item, { ...StyledItem })

export const DropdownMenuSubContent = styled(DropdownMenu.SubContent, {
  ...StyledContent
})

export const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger, {
  ...StyledItem
})

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: "1px",
  backgroundColor: "$primary500",
  margin: "$8"
})

export const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem, {
  ...StyledItem
})

export const DropDownMenuItemIndicator = styled(DropdownMenu.ItemIndicator, {
  position: "absolute",
  left: "0",
  width: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

export const DropDownMenuRadioItem = styled(DropdownMenu.RadioItem, {
  ...StyledItem
})
export const DropDownMenuGroup = styled(DropdownMenu.Group)
export const DropDownMenuSub = styled(DropdownMenu.Sub)
export const DropDownMenuRadioGroup = styled(DropdownMenu.RadioGroup)
