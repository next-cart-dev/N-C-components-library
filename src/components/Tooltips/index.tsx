import React from "react"

import * as RadixTooltip from "@radix-ui/react-tooltip"

import * as S from "./styles"
import { TooltipProps } from "./types"

export const Tooltip = ({
  id,
  children,
  offset = 8,
  tip,
  place = "top"
}: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={100}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal id={id}>
          <S.TooltipContent sideOffset={offset} side={place}>
            {tip}
            <S.TooltipArrow />
          </S.TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
