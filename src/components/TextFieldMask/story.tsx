import React from "react"

import { Props } from "./types"

import { Box } from "../Box"

import { TextFieldMask } from "."

export const InputMaskStory = ({ ...props }: Props) => {
  return (
    <Box style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      <TextFieldMask
        {...props}
        formatMaskToUse="phone"
        label={"Phone"}
      />
      <TextFieldMask
        {...props}
        formatMaskToUse="cpf"
        label={"CPF"}
      />
      <TextFieldMask
        {...props}
        formatMaskToUse="date"
        label={"Date"}
      />
      <TextFieldMask
        {...props}
        formatMaskToUse="cnpj"
        label={"CNPJ"}
      />
      <TextFieldMask
        {...props}
        formatMaskToUse="currency"
        label="Currency"
      />
    </Box>
  )
}
