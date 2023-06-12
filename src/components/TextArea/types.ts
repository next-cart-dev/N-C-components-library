import { ComponentPropsWithoutRef, RefCallback } from "react"

export type TextAreaProps = ComponentPropsWithoutRef<"textarea"> & {
  /**
   * The input label.
   */
  label?: string
  /**
   * The helper text to be displayed below the input.
   */
  helperText?: string
  /**
   * The input variant.
   */
  variant?: "success" | "danger" | "mobile"
  inputRef?: RefCallback<HTMLTextAreaElement>
}
