import reactSelect from "react-select"

import { styled } from "../../stitches.config"

export const ReactSelect = styled(reactSelect, {
  ".react-select__control": {
    borderRadius: "4px",
    borderColor: "$primary500",
    height: "48px"
  },
  ".react-select__indicator": {
    background: "$primary500",
    borderRadius: "0 2px 2px 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 10px",
    alignItems: "center"
  },
  ".react-select__indicator-separator": {
    display: "none"
  },
  ".react-select__clear-indicator": {
    background: "transparent !important"
  },
  ".react-select__multi-value__remove": {
    "&:hover": {
      background: "$primary500",
      color: "$text200"
    }
  },
  variants: {
    variant: {
      info: {
        ".react-select__control": {
          borderColor: "$info500"
        },
        ".react-select__indicator": {
          background: "$info500"
        },
        ".react-select__multi-value__remove": {
          "&:hover": {
            background: "$info500"
          }
        }
      },
      danger: {
        ".react-select__control": {
          borderColor: "$danger500"
        },
        ".react-select__indicator": {
          background: "$danger500"
        },
        ".react-select__multi-value__remove": {
          "&:hover": {
            background: "$danger500"
          }
        }
      },
      success: {
        ".react-select__control": {
          borderColor: "$tertiary500"
        },
        ".react-select__indicator": {
          background: "$tertiary500"
        },
        ".react-select__multi-value__remove": {
          "&:hover": {
            background: "$tertiary500"
          }
        }
      },
      warning: {
        ".react-select__control": {
          borderColor: "$warning500"
        },
        ".react-select__indicator": {
          background: "$warning500"
        },
        ".react-select__multi-value__remove": {
          "&:hover": {
            background: "$warning500"
          }
        }
      }
    }
  }
})

export const ErrorMessage = styled("p", {
  color: "$danger500",
  margin: "6px 0 0 10px",
  fontSize: "12px",
  height: "12px"
})
