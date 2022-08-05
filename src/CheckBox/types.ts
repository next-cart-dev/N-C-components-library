export type Props = {
  /**
   * The checkbox checkedType.
   * @default 'checkbox's
   */
  checkedType?: "checkbox" | "trace"
  /**
   * The Checkbox onClick handler.
   */
  onClick?: () => void
  /**
   * The checkbox id.
   */
  id: string
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Label for id checkbox.
   */
  label?: string
}
