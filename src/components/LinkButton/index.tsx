import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const LinkButton = ({ ...props }: Props) => {
  return <S.LinkButton {...props}>{props.children}</S.LinkButton>
}
