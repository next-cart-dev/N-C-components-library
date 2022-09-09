import React, { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"div"> & {
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
