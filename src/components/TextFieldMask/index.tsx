import React from "react"

import { CurrencyMask } from "./CurrencyMask"
import { StaticMask } from "./StaticMask"
import { Props } from "./types"

export const TextFieldMask = ({
  label = "",
  formatMaskToUse,
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
          label={label}
        />
      )}
    </>
  )
}
