import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const RadioGroup = ({
  name,
  orientation = "vertical",
  loop = true,
  defaultValue,
  onValueChange,
  onBlur,
  options,
  value,
  id,
  inputRef
}: Props) => {
  return (
    <S.RadioGroup
      id={id}
      value={value}
      name={name}
      orientation={orientation}
      defaultValue={defaultValue}
      onBlur={onBlur}
      ref={inputRef}
      onValueChange={onValueChange}
      loop={loop}
      css={{
        display: "flex",
        flexFlow: orientation === "vertical" ? "column" : "row"
      }}
    >
      {options.map((option) => (
        <Box
          key={option.id}
          css={{
            display: "grid",
            gridTemplateColumns: "20px 1fr",
            gap: "$8",
            alignItems: "center",
            ...(orientation === "vertical" && { marginBottom: "$16" }),
            ...(orientation === "horizontal" && { marginRight: "$16" })
          }}
        >
          <S.RadioGroupRadio
            id={option.id}
            value={option.value}
            disabled={option.disabled}
          >
            <S.RadioGroupIndicator />
          </S.RadioGroupRadio>
          <S.Label htmlFor={option.id}>{option.label}</S.Label>
        </Box>
      ))}
    </S.RadioGroup>
  )
}
