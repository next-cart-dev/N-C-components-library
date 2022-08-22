import React from "react"

 
export type Props = {
  /**
   * The values of the Breadcrumbs Component
   */
  steps: Array<string>
  /**
   * The Breadcrumb URL (link)
   */
  url: string
  /**
   * The Breadcrumb icon. By default it's a empty string
   */
  icons: Array<React.ReactNode>
}
