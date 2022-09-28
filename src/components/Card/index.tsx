import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Card = ({ children, variant = "primary", css }: Props) => {
  return (
    <S.Card css={{ ...css }} variant={variant}>
      {children}
    </S.Card>
  )
}
