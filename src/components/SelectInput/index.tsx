import React from "react"

import { BsCaretDownFill } from "react-icons/bs"
import Select, {
  components,
  DropdownIndicatorProps,
  PlaceholderProps
} from "react-select"

import { SelectStyled } from "./styles"
import { Props } from "./types"

export const SelectInput = ({
  options,
  isMulti,
  placeholder = "",
  ...props
}: Props) => {
  const optionsValues = options.map((option) => ({
    value: option,
    label: option
  }))
  const DropdownIndicator = ({ ...props }: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <BsCaretDownFill />
      </components.DropdownIndicator>
    )
  }

  const Placeholder = ({ ...props }: PlaceholderProps) => {
    return (
      <components.Placeholder {...props}>{placeholder}</components.Placeholder>
    )
  }

  return (
    <>
      <Select
        {...props}
        options={optionsValues}
        styles={SelectStyled}
        components={{ Placeholder, DropdownIndicator }}
        isMulti={isMulti ? true : false}
        data-testid="select-testid"
        aria-label="select input"
      />
    </>
  )
}
