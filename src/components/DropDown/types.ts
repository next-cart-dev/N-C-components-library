import React from "react"

export type Props = {
  /**
   * DropDown alignment
   * @options 'start', 'center' or 'end'
   * @default 'center'
   */
  align?: "start" | "center" | "end"
  /**
   * DropDown children
   */
  children: React.ReactNode
  /**
   * The trigger element that will open the dropDown menu
   */
  TriggerElementRef: React.ReactNode
}
