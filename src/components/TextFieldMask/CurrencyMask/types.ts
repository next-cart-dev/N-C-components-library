import { ChangeEventHandler } from "react"

import { NumberFormatValues, SourceInfo } from "react-number-format"

export type Props = {
  /**
   * Input Label
   * @options string
   * @default empty string
   */
  label?: string
  onValueChange?: (values: NumberFormatValues, sourceInfo: SourceInfo) => void
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  value?: string
}
