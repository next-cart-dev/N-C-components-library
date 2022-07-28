import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Icon } from "../Icon"

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
      {startIcon && <Icon variant={variant} size={size} />}
      {children}
      {endIcon && <Icon variant={variant} size={size} />}
    </S.Button>
  )
}
