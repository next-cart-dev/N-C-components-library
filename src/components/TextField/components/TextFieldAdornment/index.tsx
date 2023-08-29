import React from "react"

import { CSS } from "@stitches/react"

import { TextFieldAdornmentProps } from "./types"

import { config } from "../../../../stitches.config"
import * as S from "../../styles"

export const TextFieldAdornment = ({
  id,
  variant,
  adornmentRef,
  adornment
}: TextFieldAdornmentProps) => {
  const adornmentCSS: CSS<typeof config> = {
    ...(adornment?.onClick && { cursor: "pointer" }),
    ...(adornment?.position === "left" && {
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px"
    }),
    ...(adornment?.position === "right" && {
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px"
    })
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
