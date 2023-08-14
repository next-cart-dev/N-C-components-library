import reactSelect from "react-select"
import CreatableSelect from "react-select/creatable"

import { styled } from "../../stitches.config"

const styles = {
  ".react-select__control": {
    borderRadius: "4px",
    borderColor: "$primary500",
    height: "40px",
    fontSize: "$14",
    letterSpacing: "1.2px"
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
  ".react-select__menu-list": {
    maxHeight: "150px"
  },
  ".react-select__option--is-selected": {
    background: "$nextCartPurple400 !important",
    color: "$text700"
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
  ".react-select__option": {
    fontSize: "$14",
    letterSpacing: "1.2px",
    "&:hover": {
      background: "$nextCartPurple300"
    },
    background: "white"
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
        },
        ".react-select__option": {
          "&:hover": {
            background: "$info300"
          }
        },
        ".react-select__option--is-selected": {
          background: "$info400 !important"
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
        },
        ".react-select__option": {
          "&:hover": {
            background: "$danger300"
          }
        },
        ".react-select__option--is-selected": {
          background: "$danger400 !important"
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
        },
        ".react-select__option": {
          "&:hover": {
            background: "$tertiary300"
          }
        },
        ".react-select__option--is-selected": {
          background: "$tertiary400 !important"
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
        },
        ".react-select__option": {
          "&:hover": {
            background: "$warning300"
          }
        },
        ".react-select__option--is-selected": {
          background: "$warning400 !important"
        }
      }
    }
  }
}

export const ReactSelect = styled(reactSelect, styles)

export const ReactSelectCreatable = styled(CreatableSelect, {
  ...styles,
  ".react-select__value-container--has-value": {
    flexWrap: "nowrap"
  }
})

export const ErrorMessage = styled("p", {
  color: "$danger500",
  margin: "6px 0 0 10px",
  fontSize: "12px",
  letterSpacing: "1.2px",
  height: "12px"
})
