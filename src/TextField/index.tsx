import React from "react"

import * as S from "./styles"
import { Props } from "./types"

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
  error,
  inputSize = "default",
  variant
}: Props) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={id} mode={disabled ? "disabled" : variant}>
        {label}
      </FormLabel>
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
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormGroup>
  )
}
