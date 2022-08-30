import React from "react"

export type Props = {
  /**
   * Badges Label
   */
  label: string
  /**
   * Badges Types
   * @options 'badge' or 'tag'
   * @default 'badge'
   */
  type?: "badge" | "tag"
  /**
   * badges end icon
   */
  endIcon?: React.ReactNode
  /**
   * badges start icon
   */
  startIcon?: React.ReactNode
}
