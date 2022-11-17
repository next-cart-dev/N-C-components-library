import React, { ComponentPropsWithoutRef } from "react"

import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

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
  /**
   * prop to change the css
   * @options {}
   * @example css={{display: 'flex'}}
   */
  css?: CSS<typeof config>
  /**
   * themes variants of badges and tags
   */
  variant?: "success" | "info" | "danger" | "warning"
  className?: string
}
