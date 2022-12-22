export type Props = {
  /**
   * Input Label
   * @options string
   * @default empty string
   */
  label?: string
  onValueChange?: (values: { value: string; floatValue: number }) => void
}
