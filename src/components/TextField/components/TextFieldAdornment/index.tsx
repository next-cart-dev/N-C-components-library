import React from "react"

import { TextFieldAdornmentProps } from "./types"

import * as S from "../../styles"

export const TextFieldAdornment = ({
  id,
  variant,
  adornmentRef,
  adornment
}: TextFieldAdornmentProps) => {
  const adornmentCSS = {
    ...(adornment?.onClick && { cursor: "pointer" })
  }

  if (adornment?.position === "left") {
    return (
      <S.InputAdornment
        data-testid={`input-${id}-adornment`}
        onClick={adornment?.onClick}
        variant={variant}
        ref={adornmentRef}
        css={adornmentCSS}
      >
        {adornment.node}
      </S.InputAdornment>
    )
  }

  if (adornment?.position === "right") {
    return (
      <S.InputAdornment
        data-testid={`input-${id}-adornment`}
        onClick={adornment?.onClick}
        variant={variant}
        ref={adornmentRef}
        css={{ ...adornmentCSS, right: 0 }}
      >
        {adornment?.node}
      </S.InputAdornment>
    )
  }

  return null
}
