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
  adornment,
  inputRef,
  onKeyDown
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

  const adornmentCSS = {
    ...(adornment?.onClick && { cursor: "pointer" })
  }

  return (
    <FormGroup>
      {label && (
        <FormLabel htmlFor={id} variant={disabled ? "disabled" : variant}>
          {label}
        </FormLabel>
      )}
      <Box css={containerCSS}>
        {adornment?.position === "left" && (
          <S.InputAdornment
            data-testid={`input-${id}-adornment`}
            onClick={adornment?.onClick}
            variant={variant}
            ref={adornmentRef}
            css={adornmentCSS}
          >
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
          onKeyDown={onKeyDown}
          variant={variant}
          inputSize={inputSize}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          css={inputCSS}
          ref={inputRef}
        />
        {adornment?.position === "right" && (
          <S.InputAdornment
            data-testid={`input-${id}-adornment`}
            onClick={adornment?.onClick}
            variant={variant}
            ref={adornmentRef}
            css={{ ...adornmentCSS, right: 0 }}
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
