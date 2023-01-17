import { RefCallback } from "react"

type RadioButton = {
  label: string
  value: string
  id: string
  disabled?: boolean
}

export type Props = {
  defaultValue?: string
  value: string
  onValueChange: (value: string) => void
  onBlur?: React.FocusEventHandler<HTMLDivElement>
  id: string
  inputRef: RefCallback<HTMLDivElement>
  name: string
  required?: boolean
  orientation?: "horizontal" | "vertical" | undefined
  loop?: boolean
  options: RadioButton[]
}
