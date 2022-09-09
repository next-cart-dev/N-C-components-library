import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Avatar = ({ children, src, alt, delay }: Props) => {
  return (
    <S.Avatar>
      <S.Image src={src} alt={alt} />
      <S.Fallback delayMs={delay}>{children}</S.Fallback>
    </S.Avatar>
  )
}
