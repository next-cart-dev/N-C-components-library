import { MenuButton, Menu, MenuItem } from "reakit/Menu"

import { styled } from "../stitches.config"

export const DropDownWrapper = styled("div", {
  variants: {
    size: {
      small: {
        width: "100px",
        height: "35px"
      },
      normal: {
        width: "120px",
        height: "45px"
      },
      large: {
        width: "140px",
        height: "48px"
      }
    }
  }
})

export const MenuButtonStyled = styled(MenuButton, {
  borderRadius: "4px",
  border: "none",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  variants: {
    variant: {
      primary: {
        background: "$primary500",
        color: "$neutral200"
      },
      secondary: {
        background: "$neutral200",
        color: "$text700"
      }
    },
    size: {
      small: {},
      normal: {},
      large: {}
    }
  }
})

export const MenuStyled = styled(Menu, {
  variants: {
    size: {
      small: {
        width: "100px",
        height: "35px"
      },
      normal: {
        width: "120px",
        height: "45px"
      },
      large: {
        width: "140px",
        height: "48px"
      }
    }
  }
})

export const MenuItemStyled = styled(MenuItem, {
  border: "1px solid $neutral200",
  background: "$background500",
  color: "$primary700",
  fontWeight: "bold",
  cursor: "pointer",
  padding: "5px 0",
  width: "100%",
  position: "relative",
  variants: {
    variant: {
      primary: {
        background: "$primary500",
        color: "$neutral200",
        "&:hover": {
          background: "$primary700"
        }
      },
      secondary: {
        background: "$neutral200",
        color: "$text700",
        "&:hover": {
          background: "$neutral500"
        }
      }
    }
  }
})
