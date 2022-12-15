import React from "react"

import { BsCaretDownFill } from "react-icons/bs"
import ReactSelect, {
  components,
  DropdownIndicatorProps,
  PlaceholderProps
} from "react-select"

import {
  DangerVariant,
  ErrorMessage,
  InfoVariant,
  SelectStyled,
  SuccessVariant,
  WarningVariant
} from "./styles"
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
  helperText,
  defaultValue,
  variant,
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

  const defaultVariantMapping = {
    success: {
      input: SuccessVariant,
      label: "$tertiary500"
    },
    danger: {
      input: DangerVariant,
      label: "$danger500"
    },
    warning: {
      input: WarningVariant,
      label: "$warning500"
    },
    info: {
      input: InfoVariant,
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
        <Box css={{ ...labelGAP }}>
          <Box as="label" htmlFor={id} css={labelCSS}>
            {label}
          </Box>
        </Box>
        <ReactSelect
          {...props}
          defaultValue={defaultValue}
          options={options}
          styles={variant ? defaultVariantMapping[variant].input : SelectStyled}
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
      <ErrorMessage>{helperText}</ErrorMessage>
    </>
  )
}
