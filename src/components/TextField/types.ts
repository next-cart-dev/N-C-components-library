import { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"input"> & {
  label: string
  error?: string
  inputSize?: "default" | "fullWidth"
  variant?: "success" | "danger"
  type: "text" | "email" | "password"
}
