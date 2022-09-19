import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Icon = ({ size, icon, color = "$neutral100", css }: Props) => (
  <S.Icon size={size} css={css} color={color}>
    {icon}
  </S.Icon>
)
