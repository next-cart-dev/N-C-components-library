import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const FormLabel = ({ children, variant, ...props }: Props) => {
  return (
    <S.FormLabel {...props} variant={variant}>
      {children}
    </S.FormLabel>
  )
}
