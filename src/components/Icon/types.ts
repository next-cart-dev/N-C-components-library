import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

export type Props = {
  size: "small" | "normal" | "large"
  icon: React.ReactNode
  color: string
  css?: CSS<typeof config>
}
