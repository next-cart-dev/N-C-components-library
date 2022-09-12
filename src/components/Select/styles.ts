import { StylesConfig } from "react-select"

import { lightTheme } from "../../tokens"

const colors = lightTheme.theme.colors

export const SelectStyled: StylesConfig = {
  control: (styles) => ({
    ...styles,
    borderRadius: "4px",
    borderColor: colors.primary500
  }),
  container: (styles) => ({ ...styles, borderRadius: "4px", width: "300px" }),
  dropdownIndicator: (styles) => ({
    ...styles,
    background: colors.primary500,
    borderRadius: "0 2px 2px 0",
    padding: "11px"
  }),
  indicatorSeparator: () => ({ display: "none" }),
  option: (styles, { isFocused }) => ({
    ...styles,
    background: isFocused ? colors.primary400 : colors.neutral500,
    color: colors.text500
  }),
  menu: (styles) => ({ ...styles, background: colors.neutral500 }),
  multiValueRemove: (styles) => ({
    ...styles,
    "&:hover": { background: colors.primary500, color: colors.text200 }
  })
}
