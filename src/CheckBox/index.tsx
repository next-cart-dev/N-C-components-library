import React from "react"

import { CheckIcon, MinusIcon } from "@radix-ui/react-icons"

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
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.StyledCheckBox
        id={id}
        data-testid={id}
        disabled={disabled}
        onClick={onClick}
      >
        <S.StyledIndicator>
          {checkedType === "checkbox" && <CheckIcon data-testid={"checked"} />}
          {checkedType === "trace" && <MinusIcon data-testid={"traced"} />}
        </S.StyledIndicator>
      </S.StyledCheckBox>
    </S.WrapperCheckBox>
  )
}
