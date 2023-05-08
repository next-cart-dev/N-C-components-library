import { ChangeEventHandler } from "react"

import { NumberFormatValues, SourceInfo } from "react-number-format"

import { TextFieldProps } from "../../TextField/types"

export type Props = TextFieldProps & {
  /**
   * Input Label
   * @options string
   * @default empty string
   */
  label?: string
  onValueChange?: (values: NumberFormatValues, sourceInfo: SourceInfo) => void
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  value?: string | number
}
