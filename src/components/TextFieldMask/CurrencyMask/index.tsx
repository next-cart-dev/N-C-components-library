import React, { useState } from "react"

import { SourceType } from "react-number-format/types/types"

import { Props } from "./types"

import { TextField } from "../../TextField"

export const CurrencyMask = ({ label = "", onValueChange }: Props) => {
  /**
   * @desc Function that will format the value in pt-br currency
   * @param value
   * @returns the format mask
   */
  const [value, setValue] = useState<string>("")

  const currencyFormatter = (value: string) => {
    const valueToNumber = +value.replace(/\D/g, "")
    const DECIMAL_NUMBER: string = (valueToNumber / 100).toFixed(2).toString()

    const splittedDecimal: string[] = DECIMAL_NUMBER.split(".")
    const [integer, nonInteger]: string[] = splittedDecimal

    const isThousand = integer.length >= 4
    if (isThousand) {
      const splittedThousand: string[] = integer.split("")
      let dot = 0
      for (let i = 0; i < integer.length; i++) {
        if (i % 3 === 0 && i != 0) {
          const idx: number = i + dot
          splittedThousand.splice(-idx, 0, ".")
          dot = dot + 1
        }
      }
      return splittedThousand.join("") + "," + nonInteger
    } else {
      return DECIMAL_NUMBER.replace(".", ",")
    }
  }

  return (
    <TextField
      value={value}
      onChange={(e) => {
        if (e.target.value.length > 23) return e.preventDefault()

        const formattedValue = "R$ " + currencyFormatter(e.target.value)
        const value = currencyFormatter(e.target.value)
          .replace(/\./g, "")
          .replace(",", ".")
        const floatValue = Number(value)

        !e.target.value ? setValue("") : setValue(formattedValue)

        onValueChange &&
          onValueChange(
            {
              value: value,
              formattedValue: formattedValue,
              floatValue: floatValue
            },
            {
              source: "event" as SourceType.event
            }
          )
      }}
      name="currency"
      placeholder="R$ 0,00"
      type={"text"}
      label={label}
    />
  )
}
