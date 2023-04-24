export type SelectCreatableProps = {
  placeholder?: string
  id: string
  name: string
  label?: string
  inputRef?: any
  /**
   * The default value of the component
   */
  defaultValue?: {
    label: string
    value: string
  }
  /**
   * The helper text to be displayed below the input.
   */
  helperText?: string
  variant?: "danger" | "warning" | "info" | "success"
  onChange: any
  value: any
}
