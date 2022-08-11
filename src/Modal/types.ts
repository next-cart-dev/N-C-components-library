import React from "react"

export type Props = {
    /**
     * Element that will open the modal 
     */
    trigger: React.ReactNode
    /**
     * Modal children that receive a element
     */
    children: React.ReactNode
    /**
     * Property from Dialog Root that will receive a state from useState
     */
    open: boolean
    /**
     * Property that will change the open with useState
     */
    setOpen(b: boolean): Promise<boolean>
}