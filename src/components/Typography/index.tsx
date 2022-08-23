import React from "react"

import * as S from "./styles"
import { Component, Props } from "./types"

const defaultVariantMapping: Record<string, Component> = {
  h1: "h1",
  h2: "h2",
  body1: "p",
  body2: "p",
  body3: "span"
}

export const Typography = ({
  children,
  variant = "body1",
  component,
  css
}: Props) => {
  return (
    <S.Typography
      variant={variant}
      as={component || defaultVariantMapping[variant]}
      css={css}
    >
      {children}
    </S.Typography>
  )
}
