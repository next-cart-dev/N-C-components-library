import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { FormGroup } from "../FormGroup"
import { FormHelperText } from "../FormHelperText"
import { FormLabel } from "../FormLabel"

// CORRIGIR ESTILOS/VARIANTES
// IMPLEMENTAR FULL WIDTH
// IMPLEMENTAR ÍCONES

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
  variant,
  width
}: Props) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={id} disabled={disabled}>
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
        width={width}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormGroup>
  )
}
