import React from "react"

import * as S from "./styles"
import { ButtonProps } from "./types"

import { Loading } from "../Loading"

export const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  id,
  disabled = false,
  startIcon,
  endIcon,
  loading,
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
      disabled={loading || disabled}
    >
      {startIcon && !loading && startIcon}
      {children}
      {endIcon && !loading && endIcon}
      {loading && <Loading color={"black"} size={16} />}
    </S.Button>
  )
}
