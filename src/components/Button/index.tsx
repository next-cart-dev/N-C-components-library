import React from "react"

import * as S from "./styles"
import { ButtonProps } from "./types"

export const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  id,
  disabled = false,
  startIcon,
  endIcon,
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      {...props}
      role="button"
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
