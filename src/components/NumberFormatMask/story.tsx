import React from "react"

import { Props } from "./types"

import { Box } from "../Box"

import { NumberFormatMask } from "."

export const InputMaskStory = ({ ...props }: Props) => {
  return (
    <Box style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      <NumberFormatMask
        {...props}
        placeholder="+55 (##) #####-####"
        format="+55 (##) #####-####"
        label={"Phone"}
      />
      <NumberFormatMask
        {...props}
        placeholder="###.###.###-##"
        format="###.###.###-##"
        label={"CPF"}
      />
      <NumberFormatMask
        {...props}
        placeholder="##/##/####"
        format="##/##/####"
        label={"Date"}
      />
      <NumberFormatMask
        {...props}
        placeholder="##.###.###/####-##"
        format="##.###.###/####-##"
        label={"CNPJ"}
      />
      <NumberFormatMask
        {...props}
        placeholder="R$ #.###,##"
        allowPtBrCurrencyFormatter={true}
        label="Currency"
      />
    </Box>
  )
}
