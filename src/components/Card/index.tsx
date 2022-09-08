import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Card = ({ children, variant = "primary" }: Props) => {
  return <S.Card variant={variant}>{children}</S.Card>
}
