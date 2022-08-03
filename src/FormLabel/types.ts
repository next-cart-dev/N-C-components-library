import React from "react"

export type Props = React.ComponentPropsWithoutRef<"label"> & {
  required?: boolean
  disabled?: boolean
}
