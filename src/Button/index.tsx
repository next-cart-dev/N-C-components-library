import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  id,
  disabled = false,
  startIcon,
  endIcon,
  size = "normal"
}: Props) => {
  return (
    <S.Button
      variant={variant}
      onClick={onClick}
      type={type}
      id={id}
      size={size}
      disabled={disabled}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </S.Button>
  )
}
