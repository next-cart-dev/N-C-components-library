import React from "react"

export type Props = {
    /**
     * The content of the LinkButton
     */
    children: React.ReactNode
    /**
     * Event that the LinkButton will receive
     */
    onClick?: () => void
} 
