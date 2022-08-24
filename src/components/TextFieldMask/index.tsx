import React from "react"

import NumberFormat from "react-number-format"

import { Props } from "./types"

import { Box } from "../Box"
import { TextField } from "../TextField"

export const TextFieldMask = ({
  label = "",
  formatMaskToUse,
  ...props
}: Props) => {
  /**
   * @desc Function that will format the value in pt-br currency
   * @param value
   * @returns the format mask
   */
  const currencyFormatter = (value: any) => {
    if (!Number(value)) return ""

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value / 100)

    return `${amount}`
  }

  const masks = {
    cpf: {
      mask: '###.###.###-##',
      placeholder: '___.___.___-__'
    },
    cnpj: {
      mask: '##.###.###/####-##',
      placeholder: '__.___.___/____-__'
    },
    date: {
      mask: '##/##/####',
      placeholder: '__/__/____'
    },
    currency: {
      mask: currencyFormatter,
      placeholder: 'R$ 0,00'
    },
    phone: {
      mask: '+55 (##) #####-####',
      placeholder: '+55 (__) _____-____'
    }
  }

  const formatMaskIdentify = (item: string): any => {
    for (let m of Object.keys(masks)) {
      if (m === formatMaskToUse) {
        if (item === 'mask')
          return masks[m].mask
        return masks[m].placeholder
      }
    }
  }
  return (
    <Box>
      <NumberFormat
        {...props}
        placeholder={!props.placeholder ? formatMaskIdentify('placeholder') : props.placeholder}
        format={formatMaskToUse ? formatMaskIdentify('mask') : props.format}
        type="text"
        label={label}
        customInput={TextField}
      />
    </Box>
  )
}
