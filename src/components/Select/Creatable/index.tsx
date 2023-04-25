import React, { KeyboardEventHandler, useState } from "react"

import { SelectCreatableProps } from "./types"

import { Box } from "../../Box"
import { ReactSelectCreatable, ErrorMessage } from "../styles"

const components = {
  DropdownIndicator: null
}

export const SelectCreatable = ({
  placeholder = "",
  id,
  label,
  inputRef,
  name,
  helperText,
  defaultValue,
  variant,
  onChange,
  value,
  ...props
}: SelectCreatableProps) => {
  const [inputValue, setInputValue] = useState("")

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return

    switch (event.key) {
      case "Enter":
      case "Tab":
        onChange([...value, { label: inputValue, value: inputValue }])
        setInputValue("")
        event.preventDefault()
    }
  }

  const handleOnInputChange = (newValue: string) => {
    setInputValue(newValue)
  }

  const labelGAP = label && { marginBottom: "8px" }

  const defaultVariantMapping = {
    success: {
      label: "$tertiary500"
    },
    danger: {
      label: "$danger500"
    },
    warning: {
      label: "$warning500"
    },
    info: {
      label: "$info500"
    }
  }

  const labelCSS = {
    marginBottom: "$8",
    fontSize: "$14",
    letterSpacing: "$0.5",
    color: variant ? defaultVariantMapping[variant].label : "$primary500",
    display: "block"
  }

  return (
    <>
      <Box>
        <Box css={{ labelGAP }}>
          <Box as="label" htmlFor={id} css={labelCSS}>
            {label}
          </Box>
        </Box>
        <ReactSelectCreatable
          {...props}
          defaultValue={defaultValue}
          components={components}
          isClearable
          isMulti
          name={name}
          id={id}
          menuIsOpen={false}
          classNamePrefix="react-select"
          onInputChange={handleOnInputChange}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          inputValue={inputValue}
          ref={inputRef}
          value={value}
        />
      </Box>
      {helperText && <ErrorMessage>{helperText}</ErrorMessage>}
    </>
  )
}
