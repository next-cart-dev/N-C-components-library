import React from "react"

export type Props = React.ComponentPropsWithoutRef<"label"> & {
  required?: boolean
  variant?: "disabled" | "danger" | "success" | "info" | "warning" | "mobile"
}
