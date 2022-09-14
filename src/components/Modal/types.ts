import React from "react"

import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

export type Props = {
  /**
   * Modal children that receive a element
   */
  children: React.ReactNode
  /**
   * Property from Dialog Root that will receive a state from useState
   */
  open?: boolean
  /**
   * Property that will change the open with useState
   */
  onOpenChange?(open: boolean): void
  /**
   * The id of the modal
   */
  id: string
  css?: CSS<typeof config>
}
