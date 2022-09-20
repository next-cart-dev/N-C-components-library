import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Icon = ({ size, icon, css }: Props) => (
  <S.Icon size={size} css={{ ...css }}>
    {icon}
  </S.Icon>
)
