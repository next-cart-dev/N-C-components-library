import React from "react"

import * as S from "./styles"
import { TextAreaProps } from "./types"

import { FormGroup } from "../FormGroup"
import { FormHelperText } from "../FormHelperText"
import { FormLabel } from "../FormLabel"

export const TextArea = ({
  id,
  name,
  label,
  disabled,
  placeholder,
  value,
  onChange,
  onBlur,
  defaultValue,
  helperText,
  variant,
  inputRef,
  onKeyDown
}: TextAreaProps) => {
  return (
    <FormGroup>
      {label && (
        <FormLabel htmlFor={id} variant={disabled ? "disabled" : variant}>
          {label}
        </FormLabel>
      )}
      <S.TextArea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        variant={variant}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        ref={inputRef}
      />
      {helperText && (
        <FormHelperText variant={variant}>{helperText}</FormHelperText>
      )}
    </FormGroup>
  )
}
