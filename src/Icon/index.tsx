import React from "react"

import ArrowDown from "./assets/ArrowDown.svg"
import BriefcaseSVG from "./assets/briefcase.svg"
import * as S from "./styles"
import { Props } from "./types"

export const Icon = ({ variant, size, icon }: Props) => {
  function getIcon(iconItem: string) {
    switch (iconItem) {
      case "arrow":
        return <ArrowDown />
      default:
        return <BriefcaseSVG />
    }
  }
  return (
    <S.Icon size={size} variant={variant}>
      {getIcon(icon ? icon : "")}
    </S.Icon>
  )
}
