import React from "react"

import * as S from "./styles"
import { IconButtonProps } from "./types"

import { Icon } from "../Icon"

export const IconButton = ({
  icon,
  size = "medium",
  ...props
}: IconButtonProps) => {
  return (
    <S.IconButton {...props} size={size}>
      <Icon size={size} icon={icon} />
    </S.IconButton>
  )
}
