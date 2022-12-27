type RadioButton = {
  label: string
  value: string
  id: string
  disabled?: boolean
}

export type Selected = { label: string; value: string }

export type Props = {
  defaultValue?: string
  onValueChange: (value: string) => void
  name: string
  required?: boolean
  orientation?: "horizontal" | "vertical" | undefined
  loop?: boolean
  options: RadioButton[]
}
