export type Props = {
  /**
   * defaultValue value radio.
   */
  defaultValue: string
  /**
   * radio items.
   * @default 'block's'
   */
  position?: "block" | "flex"
  /**
   * radio group onValueChange.
   */
  onValueChange?: () => void
  /**
   * Radio items contain label, value, disabled, id [RadioItem]  .
   */
  radioItems: [RadioItem]
}

type RadioItem = {
  /**
   * The radio id.
   */
  id: string
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Label for id radio.
   */
  label?: string
  /**
   * value for id radio.
   */
  value: string
}
