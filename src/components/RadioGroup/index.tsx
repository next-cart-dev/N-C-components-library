import React from "react"

import { Root } from "@radix-ui/react-radio-group"

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
          >
            <S.RadioGroupIndicator />
          </S.RadioGroupRadio>
          <S.Label htmlFor={option.id}>{option.label}</S.Label>
        </Box>
      ))}
    </S.RadioGroup>
  )
}
