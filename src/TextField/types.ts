import { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"input"> & {
  label: string
  error?: string
  fullWidth?: boolean
  variant?: "success" | "danger"
  type: "text" | "email" | "password"
}
