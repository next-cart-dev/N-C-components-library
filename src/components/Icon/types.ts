import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"
import { Size } from "../../types"

export type Props = {
  size: Size
  icon: React.ReactNode
  css?: CSS<typeof config>
}
