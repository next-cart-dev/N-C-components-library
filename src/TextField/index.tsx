import React, { useEffect, useRef, useState } from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"
import { FormGroup } from "../FormGroup"
import { FormHelperText } from "../FormHelperText"
import { FormLabel } from "../FormLabel"

export const TextField = ({
  id,
  name,
  label,
  disabled,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  defaultValue,
  helperText,
  inputSize = "default",
  variant,
  adornment
}: Props) => {
  const [adornmentPadding, setAdornmentPadding] = useState<number>(0)
  const adornmentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (adornment && adornmentRef.current)
      setAdornmentPadding(
        adornmentRef.current?.offsetWidth + S.ADORNMENT_PADDING
      )
  }, [adornment])

  const inputCSS = {
    ...(adornment?.position === "left" && { paddingLeft: adornmentPadding }),
    ...(adornment?.position === "right" && { paddingRight: adornmentPadding })
  }

  const containerCSS = {
    width: inputSize === "fullWidth" ? "100%" : S.INPUT_SIZE,
    position: "relative",
    display: "inline-flex"
  }

  return (
    <FormGroup>
      {label && (
        <FormLabel htmlFor={id} mode={disabled ? "disabled" : variant}>
          {label}
        </FormLabel>
      )}
      <Box css={containerCSS}>
        {adornment?.position === "left" && (
          <S.InputAdornment variant={variant} ref={adornmentRef}>
            {adornment.node}
          </S.InputAdornment>
        )}
        <S.Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          variant={variant}
          inputSize={inputSize}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          css={inputCSS}
        />
        {adornment?.position === "right" && (
          <S.InputAdornment
            variant={variant}
            ref={adornmentRef}
            css={{ right: 0 }}
          >
            {adornment.node}
          </S.InputAdornment>
        )}
      </Box>
      {helperText && (
        <FormHelperText variant={variant}>{helperText}</FormHelperText>
      )}
    </FormGroup>
  )
}
