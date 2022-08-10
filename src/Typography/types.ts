import { ComponentPropsWithoutRef } from "react"

import { CSS } from "@stitches/react"

import { config } from "../stitches.config"

export type Component = "h1" | "h2" | "p" | "span" | "div"

export type Props = ComponentPropsWithoutRef<"div"> & {
  variant?: "h1" | "h2" | "body1" | "body2" | "body3"
  component?: Component
  css?: CSS<typeof config>
}
