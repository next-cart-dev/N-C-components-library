import React from "react"

import {
  BsCurrencyDollar,
  BsX,
  BsChevronBarLeft,
  BsFillCaretRightFill
} from "react-icons/bs"

import * as S from "./styles"
import { Props } from "./types"

const iconsMapping = {
  currency: <BsCurrencyDollar />,
  defaultX: <BsX />,
  BsChevronBarLeft: <BsChevronBarLeft />,
  BsFillCaretRightFill: <BsFillCaretRightFill />
}

export const Icon = ({ size, color = "$primary100", name }: Props) => {
  return (
    <S.Icon size={size} css={{ color }}>
      {iconsMapping[name]}
    </S.Icon>
  )
}
