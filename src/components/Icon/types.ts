import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

type IconNames =
  | "currency"
  | "defaultX"
  | "BsChevronBarLeft"
  | "BsFillCaretRightFill"
  | "BsFillCaretLeftFill"

export type Props = {
  size: "small" | "normal" | "large"
  name: IconNames
  color: string
  css?: CSS<typeof config>
}
