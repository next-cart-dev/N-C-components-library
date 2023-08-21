import React from "react"

import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons"

import * as S from "./styles"
import { Props } from "./types"

export const Checkbox = ({
  label,
  id,
  disabled,
  checked,
  name,
  onCheckedChange
}: Props) => {
  return (
    <S.WrapperCheckBox>
      <S.StyledCheckBox
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <S.StyledIndicator>
          {checked === "indeterminate" && (
            <DividerHorizontalIcon
              data-testid={`checkbox-${id}-indeterminate`}
            />
          )}
          {checked === true && (
            <CheckIcon data-testid={`checkbox-${id}-checked`} />
          )}
        </S.StyledIndicator>
      </S.StyledCheckBox>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
    </S.WrapperCheckBox>
  )
}
