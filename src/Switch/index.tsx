import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Switch = ({ id, label, disabled, variant, onClick }: Props) => (
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    {label && (
      <S.Label htmlFor={id} css={{ paddingRight: 15 }}>
        {label}
      </S.Label>
    )}
    <S.SwitchStyled
      disabled={disabled}
      onClick={onClick}
      id={id}
      data-testid={id}
      variant={variant}
    >
      <S.SwitchThumbStyled />
    </S.SwitchStyled>
  </div>
)
