import { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"div"> & {
  id?: string
  variant: "info" | "success" | "danger" | "warning"
  message: string
  title?: string
  icon?: string
  canCloseAlert?: boolean
}
