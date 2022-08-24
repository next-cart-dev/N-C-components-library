import React from "react"

export type Props = {
  /**
   * Element that will open the modal
   */
  triggerElementRef: any
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
   * Modal title
   */
  title?: string
}
