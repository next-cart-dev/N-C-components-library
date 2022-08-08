import React from "react"

export type Props = React.ComponentPropsWithoutRef<"label"> & {
  required?: boolean
  mode?: "disabled" | "danger" | "success"
}
