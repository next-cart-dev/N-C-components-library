import React from "react"

import NumberFormat from "react-number-format"

import { Props } from "./types"

import { Box } from "../Box"
import { TextField } from "../TextField"

export const NumberFormatMask = ({
  label = "",
  allowPtBrCurrencyFormatter,
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

  return (
    <Box>
      <NumberFormat
        {...props}
        format={
          allowPtBrCurrencyFormatter === true ? currencyFormatter : props.format
        }
        type="text"
        label={label}
        customInput={TextField}
      />
    </Box>
  )
}
