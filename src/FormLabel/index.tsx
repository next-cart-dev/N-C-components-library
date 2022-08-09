import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const FormLabel = ({ children, mode, ...props }: Props) => {
  return (
    <S.FormLabel {...props} mode={mode}>
      {children}
    </S.FormLabel>
  )
}
