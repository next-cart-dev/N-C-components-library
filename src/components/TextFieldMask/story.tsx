import React from "react"

import { Props } from "./types"

import { Box } from "../Box"

import { TextFieldMask } from "."

export const InputMaskStory = ({ ...props }: Props) => {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}
    >
      <TextFieldMask
        {...props}
        placeholderToUse="mobile"
        formatMaskToUse="mobile"
        label={"Phone"}
      />
      <TextFieldMask
        {...props}
        placeholderToUse="cpf"
        formatMaskToUse="cpf"
        label={"CPF"}
      />
      <TextFieldMask
        {...props}
        placeholderToUse="date"
        formatMaskToUse="date"
        label={"Date"}
      />
      <TextFieldMask
        {...props}
        placeholderToUse="cnpj"
        formatMaskToUse="cnpj"
        label={"CNPJ"}
      />
      <TextFieldMask
        {...props}
        placeholderToUse="currency"
        formatMaskToUse="currency"
        onValueChange={(values, sourceEvent) =>
          console.log(values, sourceEvent)
        }
        label="Currency"
      />
    </Box>
  )
}
