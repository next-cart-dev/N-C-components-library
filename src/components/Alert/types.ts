import { ComponentPropsWithoutRef, ReactNode } from "react"

export type Props = ComponentPropsWithoutRef<"div"> & {
  id?: string
  variant?: "info" | "success" | "danger" | "warning"
  message: string
  title?: string
  icon?: ReactNode
}
