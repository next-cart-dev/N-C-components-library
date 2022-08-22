import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const LinkButton = ({ ...props }: Props) => {
  return (
    <Box>
      <S.LinkButton {...props}>{props.children}</S.LinkButton>
    </Box>
  )
}
