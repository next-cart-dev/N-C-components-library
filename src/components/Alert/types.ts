import { ComponentPropsWithoutRef, ReactNode } from "react"

import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

export type Props = ComponentPropsWithoutRef<"div"> & {
  id?: string
  variant?: "info" | "success" | "danger" | "warning"
  message: string
  title?: string
  icon?: ReactNode
  css?: CSS<typeof config>
}
