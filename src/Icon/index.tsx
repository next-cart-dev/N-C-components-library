import React from "react"

import { BsCurrencyDollar, BsX } from "react-icons/bs"

import * as S from "./styles"
import { Props } from "./types"

const iconsMapping = {
  currency: <BsCurrencyDollar />,
  defaultX: <BsX />
}

export const Icon = ({ size, color = "$primary100", name }: Props) => {
  return (
    <S.Icon size={size} css={{ color }}>
      {iconsMapping[name]}
    </S.Icon>
  )
}
