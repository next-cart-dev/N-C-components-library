import { RefObject } from "react"

import { TextFieldProps } from "../../types"

export type TextFieldAdornmentProps = {
  id?: string
  adornment: TextFieldProps["adornment"]
  variant: TextFieldProps["variant"]
  adornmentRef: RefObject<HTMLDivElement>
}
