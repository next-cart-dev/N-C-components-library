import { ComponentPropsWithoutRef } from "react"

import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

export type Props = ComponentPropsWithoutRef<"div"> & {
  variant?: "primary" | "secondary" | "tertiary"
  css?: CSS<typeof config>
}
