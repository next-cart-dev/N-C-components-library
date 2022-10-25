import React, { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"input"> & {
  /**
   * The input label.
   */
  label?: string
  /**
   * The helper text to be displayed below the input.
   */
  helperText?: string
  /**
   * The input size.
   * @default 'default'
   */
  inputSize?: "default" | "fullWidth"
  /**
   * The input variant.
   */
  variant?: "success" | "danger" | "mobile"
  /**
   * The input type.
   * @default 'text'
   */
  type: "text" | "email" | "password"
  /**
   * The input adornment, you can define the position, an onClick event and pass a string or icon to display it.
   */
  adornment?: {
    position: "right" | "left"
    node: React.ReactNode
    onClick?: () => void
  }
}
