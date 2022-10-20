import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const Switch = ({
  id,
  label,
  disabled,
  name,
  onCheckedChange
}: Props) => (
  <Box css={{ display: "flex", alignItems: "center" }}>
    <S.Switch
      id={id}
      disabled={disabled}
      name={name}
      onCheckedChange={onCheckedChange}
    >
      <S.Thumb />
    </S.Switch>
    <S.Label htmlFor={id}>{label}</S.Label>
  </Box>
)
