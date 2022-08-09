import React from "react"

export type Props = {
  /**
   * The DropDown text content.
   */
  children: React.ReactNode
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
   * The element placed before the children. Don't use it now since we only have one icon.
   * @experimental
   */
  startIcon?: React.ReactNode
  /**
   * DropDown items contain label, value, disabled, id [DropDown]  .
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
   * The DropDown href handler.
   */
  href?: string
}
