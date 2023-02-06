import React from "react"

import { PatternFormat as ReactPatternFormat } from "react-number-format"

import { DefaultMaskMapping, Props } from "./types"

import { TextField } from "../../TextField"

export const StaticMask = ({
  label = "",
  formatMaskToUse,
  placeholderToUse,
  format = " ",
  type,
  ...props
}: Props) => {
  const defaultMaskMapping: DefaultMaskMapping = {
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
    mobile: {
      mask: "+55 (##) #####-####",
      placeholder: "+55 (__) _____-____"
    }
  }

  return (
    <ReactPatternFormat
      {...props}
      placeholder={
        placeholderToUse && placeholderToUse != "currency"
          ? defaultMaskMapping[placeholderToUse].placeholder
          : props.placeholder
      }
      format={
        formatMaskToUse && formatMaskToUse != "currency"
          ? defaultMaskMapping[formatMaskToUse].mask
          : format
      }
      type={type}
      label={label}
      customInput={TextField}
    />
  )
}
