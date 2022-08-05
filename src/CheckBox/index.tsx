import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Checkbox = ({
  label,
  id,
  disabled,
  onClick,
  checkedType = "checkbox"
}: Props) => {
  return (
    <S.WrapperCheckBox>
      <S.StyledCheckBox
        id={id}
        data-testid={id}
        disabled={disabled}
        onClick={onClick}
      >
        <S.StyledIndicator>
          {checkedType === "checkbox" && <span>checkbox</span>}
          {checkedType === "trace" && <span>trace</span>}
        </S.StyledIndicator>
      </S.StyledCheckBox>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
    </S.WrapperCheckBox>
  )
}
