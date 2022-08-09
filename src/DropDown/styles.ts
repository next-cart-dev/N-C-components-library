import { MenuButton, Menu, MenuItem } from "reakit/Menu"

import { styled } from "../stitches.config"

export const MenuButtonStyled = styled(MenuButton, {
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  height: "28px",
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

export const MenuStyled = styled(Menu, {})

export const MenuItemStyled = styled(MenuItem, {
  border: "1px solid $neutral200",
  background: "$background500",
  color: "$primary700",
  fontWeight: "bold",
  cursor: "pointer",
  variants: {
    size: {
      small: {
        width: "100px",
        height: "25px"
      },
      normal: {
        width: "120px",
        height: "28px"
      },
      large: {
        width: "140px",
        height: "30px"
      }
    },
    variant: {
      primary: {
        background: "$primary500",
        color: "$neutral200"
      },
      secondary: {
        background: "$neutral200",
        color: "$text700"
      }
    }
  }
})
