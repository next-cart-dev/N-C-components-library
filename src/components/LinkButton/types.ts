import React, { ComponentPropsWithoutRef } from "react"

import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

export type Props = ComponentPropsWithoutRef<"button"> & {
  /**
   * The content of the LinkButton
   */
  children: React.ReactNode
  /**
   * Event that the LinkButton will receive
   */
  onClick?: () => void
  css?: CSS<typeof config>
}
