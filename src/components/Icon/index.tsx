import React from "react"

import { BsCurrencyDollar } from "react-icons/bs"

import * as S from "./styles"
import { Props } from "./types"

const iconsMapping = {
  currency: <BsCurrencyDollar />
}

export const Icon = ({ variant, size, name }: Props) => {
  return (
    <S.Icon size={size} variant={variant}>
      {iconsMapping[name]}
    </S.Icon>
  )
}
