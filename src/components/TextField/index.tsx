import React, { useEffect, useRef, useState } from "react"

import { TextFieldAdornment } from "./components/TextFieldAdornment"
import { TextFieldClearIcon } from "./components/TextFieldClearIcon"
import * as S from "./styles"
import { TextFieldProps } from "./types"

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
  isClearable,
  onClear,
  helperText,
  inputSize = "default",
  variant,
  adornment,
  inputRef,
  onKeyDown
}: TextFieldProps) => {
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
    ...(adornment?.position === "right" && {
      paddingRight: isClearable ? adornmentPadding + 24 : adornmentPadding
    })
  }

  const containerCSS = {
    width: inputSize === "fullWidth" ? "100%" : S.INPUT_SIZE,
    position: "relative",
    display: "inline-flex"
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
          <TextFieldAdornment
            id={id}
            adornment={adornment}
            variant={variant}
            adornmentRef={adornmentRef}
          />
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
        {isClearable && (
          <TextFieldClearIcon
            adornment={adornment}
            onClear={onClear}
            padding={adornmentPadding}
          />
        )}
        {adornment?.position === "right" && (
          <TextFieldAdornment
            id={id}
            adornment={adornment}
            variant={variant}
            adornmentRef={adornmentRef}
          />
        )}
      </Box>
      {helperText && (
        <FormHelperText variant={variant}>{helperText}</FormHelperText>
      )}
    </FormGroup>
  )
}
