import React from "react"

type Place = "top" | "right" | "bottom" | "left"
type Type = "dark" | "success" | "warning" | "error" | "info" | "light"

export type Props = {
  /**
   * Effect of tooltip, by default it is solid.
   */
  float?: boolean
  /**
   * Placement of tooltip. by default it is top.
   */
  place?: Place
  /**
   * Tooltip value
   */
  tip: string
  /**
   * The element that will be overridden by the tooltip
   */
  children: React.ReactNode
  /**
   * The type of tooltip. by default it is dark
   */
  type?: Type
  /**
   * The component need to receive a unique id
   */
  id: string
  /**
   * Space between tooltip and the element.
   */
  offset?: number
}
