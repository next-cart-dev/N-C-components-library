import { StylesConfig } from "react-select"

import { styled, theme } from "../../stitches.config"

const colors = theme.colors

export const SelectStyled: StylesConfig = {
  control: (styles) => ({
    ...styles,
    borderRadius: "4px",
    borderColor: colors.primary500.value,
    height: "48px"
  }),
  container: (styles) => ({ ...styles, borderRadius: "4px", width: "100%" }),
  dropdownIndicator: (styles) => ({
    ...styles,
    background: colors.primary500.value,
    borderRadius: "0 2px 2px 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 10px",
    alignItems: "center"
  }),
  indicatorSeparator: () => ({ display: "none" }),
  clearIndicator: (styles) => ({
    ...styles,
    padding: "2px"
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    background: isFocused ? colors.primary400.value : colors.neutral500.value,
    color: colors.text500.value
  }),
  menu: (styles) => ({ ...styles, background: colors.neutral500.value }),
  multiValueRemove: (styles) => ({
    ...styles,
    "&:hover": {
      background: colors.primary500.value,
      color: colors.text200.value
    }
  })
}

export const DangerVariant: StylesConfig = {
  ...SelectStyled,
  control: (styles) => ({
    ...styles,
    borderRadius: "4px",
    borderColor: colors.danger500.value,
    height: "48px"
  }),
  container: (styles) => ({ ...styles, borderRadius: "4px", width: "100%" }),
  dropdownIndicator: (styles) => ({
    ...styles,
    background: colors.danger500.value,
    borderRadius: "0 2px 2px 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 10px",
    alignItems: "center"
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    "&:hover": {
      background: colors.danger500.value,
      color: colors.text200.value
    }
  })
}

export const InfoVariant: StylesConfig = {
  ...SelectStyled,
  control: (styles) => ({
    ...styles,
    borderRadius: "4px",
    borderColor: colors.info500.value,
    height: "48px"
  }),
  container: (styles) => ({ ...styles, borderRadius: "4px", width: "100%" }),
  dropdownIndicator: (styles) => ({
    ...styles,
    background: colors.info500.value,
    borderRadius: "0 2px 2px 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 10px",
    alignItems: "center"
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    "&:hover": {
      background: colors.info500.value,
      color: colors.text200.value
    }
  })
}

export const WarningVariant: StylesConfig = {
  ...SelectStyled,
  control: (styles) => ({
    ...styles,
    borderRadius: "4px",
    borderColor: colors.warning500.value,
    height: "48px"
  }),
  container: (styles) => ({ ...styles, borderRadius: "4px", width: "100%" }),
  dropdownIndicator: (styles) => ({
    ...styles,
    background: colors.warning500.value,
    borderRadius: "0 2px 2px 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 10px",
    alignItems: "center"
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    "&:hover": {
      background: colors.warning500.value,
      color: colors.text200.value
    }
  })
}

export const SuccessVariant: StylesConfig = {
  ...SelectStyled,
  control: (styles) => ({
    ...styles,
    borderRadius: "4px",
    borderColor: colors.tertiary500.value,
    height: "48px"
  }),
  container: (styles) => ({ ...styles, borderRadius: "4px", width: "100%" }),
  dropdownIndicator: (styles) => ({
    ...styles,
    background: colors.tertiary500.value,
    borderRadius: "0 2px 2px 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 10px",
    alignItems: "center"
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    "&:hover": {
      background: colors.tertiary500.value,
      color: colors.text200.value
    }
  })
}

export const ErrorMessage = styled("p", {
  color: "$danger500",
  margin: "6px 0 0 10px",
  fontSize: "12px",
  height: "12px"
})
