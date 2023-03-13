import React, { forwardRef } from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Icon = forwardRef<HTMLSpanElement, Props>(
  ({ icon, size, css }, ref) => {
    return (
      <S.Icon ref={ref} size={size} css={{ ...css }}>
        {icon}
      </S.Icon>
    )
  }
)

Icon.displayName = "Icon"
