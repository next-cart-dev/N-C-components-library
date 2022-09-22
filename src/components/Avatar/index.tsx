import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Avatar = ({ css, children, src, alt, delay }: Props) => {
  return (
    <S.Avatar css={css}>
      <S.Image src={src} alt={alt} />
      <S.Fallback css={{ fontSize: css?.fontSize }} delayMs={delay}>
        {children}
      </S.Fallback>
    </S.Avatar>
  )
}
