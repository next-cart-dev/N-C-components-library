import React, { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"button"> & {
  /**
   * The content of the LinkButton
   */
  children: React.ReactNode
  /**
   * Event that the LinkButton will receive
   */
  onClick?: () => void
}
