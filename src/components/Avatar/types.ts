import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

export type Props = {
  src: string
  alt: string
  delay?: number
  children: React.ReactNode
  css?: CSS<typeof config>
}
