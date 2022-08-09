import React from "react"

import { MenuSeparator, useMenuState } from "reakit/Menu"

import * as S from "./styles"
import { Props } from "./types"

import { Icon } from "../Icon"

export const DropDown = ({
  variant = "primary",
  children,
  size = "normal",
  id,
  arialLabel,
  withArrow = true,
  withIcon = false,
  dropDownItems
}: Props) => {
  const menu = useMenuState()
  return (
    <S.DropDownWrapper size={size}>
      {/* Button menu */}
      <S.MenuButtonStyled {...menu} variant={variant} size={size}>
        {withIcon && <Icon size={size} variant={variant} id={id} />}
        {children}
        {withArrow && <Icon size={"small"} variant={variant} icon={"arrow"} />}
      </S.MenuButtonStyled>
      {/* Items menu */}
      <S.MenuStyled {...menu} aria-label={arialLabel} size={size}>
        {dropDownItems.map((item, index) => (
          <div key={index}>
            <a href={item.href}>
              <S.MenuItemStyled
                variant={variant}
                {...menu}
                disabled={item.disabled}
              >
                {item.label}
              </S.MenuItemStyled>
            </a>
            {item.separator && <MenuSeparator {...menu} />}
          </div>
        ))}
      </S.MenuStyled>
    </S.DropDownWrapper>
  )
}
