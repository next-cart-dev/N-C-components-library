import React, { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"input"> & {
  label?: string
  helperText?: string
  inputSize?: "default" | "fullWidth"
  variant?: "success" | "danger"
  type: "text" | "email" | "password"
  adornment?: {
    position: "right" | "left"
    node: React.ReactNode
  }
}
