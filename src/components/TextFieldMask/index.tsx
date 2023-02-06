import React from "react"

import { CurrencyMask } from "./CurrencyMask"
import { StaticMask } from "./StaticMask"
import { Props } from "./types"

export const TextFieldMask = ({
  label = "",
  formatMaskToUse,
  placeholderToUse,
  type,
  ...props
}: Props) => {
  return (
    <>
      {formatMaskToUse === "currency" ? (
        <CurrencyMask {...props} type={type} label={label} />
      ) : (
        <StaticMask
          {...props}
          formatMaskToUse={formatMaskToUse}
          placeholderToUse={placeholderToUse}
          type={type}
          label={label}
        />
      )}
    </>
  )
}
