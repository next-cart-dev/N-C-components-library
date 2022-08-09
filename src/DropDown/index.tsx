import React from "react"

import { MenuSeparator, useMenuState } from "reakit/Menu"

import * as S from "./styles"
import { Props } from "./types"

import { Icon } from "../Icon"

export const DropDown = ({
  variant,
  children,
  size,
  arialLabel,
  withArrow = true,
  withIcon,
  dropDownItems
}: Props) => {
  const menu = useMenuState()
  return (
    <S.DropDownWrapper size={size}>
      <S.MenuButtonStyled {...menu} variant={variant}>
        {withIcon && <Icon size={size} variant={variant} />}
        {children}
        {withArrow && <Icon size={"small"} variant={variant} icon={"arrow"} />}
      </S.MenuButtonStyled>
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
