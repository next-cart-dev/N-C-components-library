import React from "react"

export type Props = {
  /**
   * The DropDown text content.
   */
  children: React.ReactNode
  /**
   * The DropDown menu text content.
   */
  arialLabel?: string
  /**
   * The DropDown variant style.
   * @default 'primary's
   */
  variant: "primary" | "secondary"
  /**
   * The DropDown size.
   * @default 'small'
   */
  size: "small" | "normal" | "large"
  /**
   * The DropDown onClick handler.
   */
  onClick?: () => void
  id?: string
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * The element Arrow placed after the children.
   * @experimental
   */
  withArrow?: boolean
  /**
   * The element placed before the children.
   * @experimental
   */
  withIcon?: boolean
  /**
   * DropDown items contain label, value, disabled, id, href, separator, onClick [DropDown]  .
   */
  dropDownItems: [DropDownItem]
}

type DropDownItem = {
  /**
   * The radio id.
   */
  id: string
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Label for id radio.
   */
  label?: string
  /**
   * The DropDown onClick handler.
   */
  onClick?: () => void
  /**
   * The DropDown item href handler.
   */
  href?: string
  /**
   * The DropDown item separator.
   */
  separator?: boolean
}
