import { SyntheticEvent } from "react"

export declare enum SourceType {
  event = "event",
  props = "prop"
}

export type SourceInfo = {
  event?: SyntheticEvent
  source: SourceType
}

export type Values = {
  value: string
  floatValue: number
  formattedValue: string
}

export type Props = {
  /**
   * Input Label
   * @options string
   * @default empty string
   */
  label?: string
  onValueChange?: (values: Values, sourceInfo: SourceInfo) => void
}
