export type Props = {
  /**
   * The checkbox style.
   * @default 'neutral's
   */
  variant?: "primary" | "neutral"
  /**
   * The checkbox onClick handler.
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
   *
   */
  label?: string
}
