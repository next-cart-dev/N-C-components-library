import React from "react"

import { BsCaretDownFill } from "react-icons/bs"
import ReactSelect, {
  components,
  DropdownIndicatorProps,
  PlaceholderProps
} from "react-select"

import { SelectStyled, MobileSelectStyled } from "./styles"
import { Props } from "./types"

import { Icon } from "../Icon"

export const Select = ({
  options,
  isMulti,
  placeholder = "",
  isClearable = true,
  id,
  mobile = false,
  ...props
}: Props) => {
  const DropdownIndicator = ({ ...props }: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon size="large" icon={<BsCaretDownFill color="white" />} />
      </components.DropdownIndicator>
    )
  }

  const Placeholder = ({ ...props }: PlaceholderProps) => {
    return (
      <components.Placeholder {...props}>{placeholder}</components.Placeholder>
    )
  }

  return (
    <ReactSelect
      {...props}
      options={options}
      styles={mobile ? { ...MobileSelectStyled } : { ...SelectStyled }}
      components={{ Placeholder, DropdownIndicator }}
      isMulti={isMulti}
      isClearable={isClearable}
    />
  )
}
