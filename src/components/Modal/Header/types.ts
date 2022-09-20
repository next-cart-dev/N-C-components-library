import { CSS } from "@stitches/react"

import { config } from "../../../stitches.config"

export type Props = {
  children: React.ReactNode
  css?: CSS<typeof config>
}
