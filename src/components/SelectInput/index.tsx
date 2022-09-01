import React from "react"

import { BsCaretDownFill } from "react-icons/bs"
import Select, {
  components,
  DropdownIndicatorProps,
  PlaceholderProps
} from "react-select"

import { SelectStyled } from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const SelectInput = ({ options, isMulti, placeholder = "" }: Props) => {
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
    <Box data-testid="select-testid">
      <Select
        options={options}
        styles={SelectStyled}
        components={{ Placeholder, DropdownIndicator }}
        isMulti={isMulti ? true : false}
      />
    </Box>
  )
}
