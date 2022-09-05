import React from "react"

import {
  BsCurrencyDollar,
  BsX,
  BsChevronBarLeft,
  BsFillCaretRightFill,
  BsFillCaretLeftFill
} from "react-icons/bs"

import * as S from "./styles"
import { Props } from "./types"

const iconsMapping = {
  currency: <BsCurrencyDollar />,
  defaultX: <BsX />,
  BsChevronBarLeft: <BsChevronBarLeft />,
  BsFillCaretRightFill: <BsFillCaretRightFill />,
  BsFillCaretLeftFill: <BsFillCaretLeftFill />
}

export const Icon = ({ size, color = "$neutral100", name, css }: Props) => {
  return (
    <S.Icon size={size} css={css} color={color}>
      {iconsMapping[name]}
    </S.Icon>
  )
}
