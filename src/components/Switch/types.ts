export type Props = {
  /**
   * The component onChange handler.
   */
  onCheckedChange?: (checked: boolean) => void
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
   *
   */
  label?: string
  name: string
}
