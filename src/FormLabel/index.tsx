import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const FormLabel = ({ children, disabled, ...props }: Props) => {
  return (
    <S.FormLabel {...props} mode={disabled ? "disabled" : undefined}>
      {children}
    </S.FormLabel>
  )
}
