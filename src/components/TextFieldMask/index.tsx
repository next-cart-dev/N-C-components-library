import React from "react"

import { CurrencyMask } from "./CurrencyMask"
import { StaticMask } from "./StaticMask"
import { Props } from "./types"

import { Box } from "../Box"

export const TextFieldMask = ({
  label = "",
  formatMaskToUse,
  placeholderToUse,
  ...props
}: Props) => {
  return (
    <>
      {formatMaskToUse === "currency" ? (
        <CurrencyMask {...props} label={label} />
      ) : (
        <StaticMask
          {...props}
          formatMaskToUse={formatMaskToUse}
          placeholderToUse={placeholderToUse}
          label={label}
        />
      )}
    </>
  )
}
