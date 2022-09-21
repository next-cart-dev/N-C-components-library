import React from "react"

import { BsCaretDownFill } from "react-icons/bs"
import ReactSelect, {
  components,
  DropdownIndicatorProps,
  PlaceholderProps
} from "react-select"

import { SelectStyled } from "./styles"
import { Props } from "./types"

export const Select = ({
  options,
  isMulti,
  placeholder = "",
  id,
  ...props
}: Props) => {
  const DropdownIndicator = ({ ...props }: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <BsCaretDownFill color="white" />
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
      <ReactSelect
        {...props}
        options={options}
        styles={SelectStyled}
        components={{ Placeholder, DropdownIndicator }}
        isMulti={isMulti}
        isClearable
      />
    </>
  )
}
