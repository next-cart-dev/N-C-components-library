import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const FormHelperText = ({ children, variant }: Props) => (
  <S.FormHelperText variant={variant}>{children}</S.FormHelperText>
)
