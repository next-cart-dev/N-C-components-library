import React from "react"

import NumberFormat, { FormatInputValueFunction } from "react-number-format"

import { MaskFormat, MaskType, Props } from "./types"

import { Box } from "../Box"
import { TextField } from "../TextField"

export const TextFieldMask = ({
  label = "",
  formatMaskToUse,
  placeholderToUse,
  ...props
}: Props) => {
  /**
   * @desc Function that will format the value in pt-br currency
   * @param value
   * @returns the format mask
   */
  const currencyFormatter: FormatInputValueFunction = (value: string) => {
    const castedValueToNumber = Number(value)

    if (!castedValueToNumber) return ""

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(castedValueToNumber / 100)

    return `${amount}`
  }

  const defaultMaskMapping: Record<MaskType, MaskFormat> = {
    cpf: {
      mask: "###.###.###-##",
      placeholder: "___.___.___-__"
    },
    cnpj: {
      mask: "##.###.###/####-##",
      placeholder: "__.___.___/____-__"
    },
    date: {
      mask: "##/##/####",
      placeholder: "__/__/____"
    },
    currency: {
      mask: currencyFormatter,
      placeholder: "R$ 0,00"
    },
    mobile: {
      mask: "+55 (##) #####-####",
      placeholder: "+55 (__) _____-____"
    }
  }

  return (
    <Box>
      <NumberFormat
        {...props}
        placeholder={
          placeholderToUse
            ? defaultMaskMapping[placeholderToUse].placeholder
            : props.placeholder
        }
        format={
          formatMaskToUse
            ? defaultMaskMapping[formatMaskToUse].mask
            : props.format
        }
        type="text"
        label={label}
        customInput={TextField}
      />
    </Box>
  )
}
