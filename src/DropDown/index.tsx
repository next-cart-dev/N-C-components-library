import React from "react"

import { useMenuState } from "reakit/Menu"

import * as S from "./styles"
import { Props } from "./types"

import { Icon } from "../Icon"

export const DropDown = ({ variant, children, size, dropDownItems }: Props) => {
  const menu = useMenuState()
  return (
    <>
      <S.MenuButtonStyled {...menu} variant={variant} size={size}>
        <Icon size={size} variant={variant} />
        {children}
      </S.MenuButtonStyled>
      <S.MenuStyled {...menu} aria-label="Preferences">
        {dropDownItems.map((item, index) => (
          <div key={index}>
            <S.MenuItemStyled
              variant={variant}
              size={size}
              {...menu}
              disabled={item.disabled}
            >
              {item.label}
            </S.MenuItemStyled>
          </div>
        ))}
      </S.MenuStyled>
    </>
  )
}
