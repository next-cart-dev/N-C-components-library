import React, { useState } from "react"

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

const Content = ({ children, ...props }: DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <S.DropdownMenuContent {...props}>
        {children}
        <S.StyledArrow />
      </S.DropdownMenuContent>
    </DropdownMenuPrimitive.Portal>
  )
}
const DropDownMenuContent = Content

export const DropDownElements = {
  Label: S.DropdownMenuLabel,
  Item: S.DropdownMenuItem,
  SubTrigger: S.DropdownMenuSubTrigger,
  SubContent: S.DropdownMenuSubContent,
  Separator: S.DropdownMenuSeparator,
  CheckboxItem: S.DropdownMenuCheckboxItem,
  ItemIndicator: S.DropDownMenuItemIndicator,
  RadioItem: S.DropDownMenuRadioItem,
  Group: S.DropDownMenuGroup,
  Sub: S.DropDownMenuSub,
  RadioGroup: S.DropDownMenuRadioGroup
}

export const DropDown = ({
  children,
  align = "center",
  TriggerElementRef
}: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <Box>
      <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
        <DropdownMenuPrimitive.Trigger asChild>
          <S.TriggerContainer
            onClick={() => setOpen(!open)}
            data-testid="trigger-testid"
          >
            {TriggerElementRef}
          </S.TriggerContainer>
        </DropdownMenuPrimitive.Trigger>
        <DropDownMenuContent sideOffset={5} align={align}>
          {children}
          <DropdownMenuPrimitive.Arrow />
        </DropDownMenuContent>
      </DropdownMenuPrimitive.Root>
    </Box>
  )
}
