import { TextFieldProps } from "../../types"

export type TextFieldClearIconProps = {
  adornment: TextFieldProps["adornment"]
  onClear?: () => void
  padding: number
}
