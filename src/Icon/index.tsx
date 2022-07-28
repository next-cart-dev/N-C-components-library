import React from "react"

import BriefcaseSVG from "./assets/briefcase.svg"
import * as S from "./styles"
import { Props } from "./types"

export const Icon = ({ variant, size }: Props) => {
  return (
    <S.Icon size={size} variant={variant}>
      <BriefcaseSVG />
    </S.Icon>
  )
}
