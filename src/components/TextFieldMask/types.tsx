import { ComponentPropsWithoutRef } from "react"

import { Props as PatternProps } from "./StaticMask/types"

export type Props = ComponentPropsWithoutRef<"input"> & PatternProps
