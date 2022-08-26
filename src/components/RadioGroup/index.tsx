import React from "react"

import * as S from "./styles"
import { Props } from "./types"

export const RadioGroup = ({
  radioItems,
  defaultValue,
  position = "flex",
  onValueChange
}: Props) => {
  return (
    <S.WrapperRadioGroup
      defaultValue={defaultValue}
      position={position}
      onValueChange={onValueChange}
    >
      {radioItems.map((radio, index) => (
        <span key={index}>
          <S.StyledRadio
            id={radio.id}
            data-testid={radio.id}
            disabled={radio.disabled}
            value={radio.value}
            key={index}
          >
            <S.StyledIndicator />
          </S.StyledRadio>
          {radio.label && <S.Label htmlFor={radio.id}>{radio.label}</S.Label>}
        </span>
      ))}
    </S.WrapperRadioGroup>
  )
}
