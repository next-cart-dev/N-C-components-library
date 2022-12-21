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
  options
}: Props) => {
  return (
    <S.RadioGroup
      name={name}
      orientation={orientation}
      defaultValue={defaultValue}
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
            display: "flex",
            alignItems: "center",
            ...(orientation === "vertical" && { marginBottom: "$16" }),
            ...(orientation === "horizontal" && { marginRight: "$16" })
          }}
        >
          <S.RadioGroupRadio
            id={option.id}
            value={option.value}
            disabled={option.disabled}
            onClick={() =>
              onValueChange({ label: option.label, value: option.value })
            }
          >
            <S.RadioGroupIndicator />
          </S.RadioGroupRadio>
          <S.Label htmlFor={option.id}>{option.label}</S.Label>
        </Box>
      ))}
    </S.RadioGroup>
  )
}
