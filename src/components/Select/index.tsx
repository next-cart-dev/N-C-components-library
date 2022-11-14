import React from "react"

import { BsCaretDownFill } from "react-icons/bs"
import ReactSelect, {
  components,
  DropdownIndicatorProps,
  PlaceholderProps
} from "react-select"

import { SelectStyled } from "./styles"
import { Props } from "./types"

import { Box } from "../Box"
import { Icon } from "../Icon"

export const Select = ({
  options,
  isMulti,
  placeholder = "",
  isClearable = true,
  id,
  label,
  inputId,
  inputRef,
  name,
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

  const labelGAP = label && { marginBottom: "8px" }

  const labelCSS = {
    marginBottom: "$8",
    fontSize: "$14",
    letterSpacing: "$0.5",
    color: "$primary500",
    display: "block"
  }

  return (
    <Box>
      <Box css={{ ...labelGAP }}>
        <Box as="label" htmlFor={id} css={labelCSS}>
          {label}
        </Box>
      </Box>
      <ReactSelect
        {...props}
        options={options}
        styles={SelectStyled}
        components={{ Placeholder, DropdownIndicator }}
        isMulti={isMulti}
        isClearable={isClearable}
        name={name}
        id={id}
        ref={inputRef}
        inputId={inputId}
        aria-label={label}
      />
    </Box>
  )
}
