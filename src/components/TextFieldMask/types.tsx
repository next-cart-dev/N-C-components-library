import { ComponentPropsWithoutRef } from "react"

import { Props as PatternProps } from "./StaticMask/types"

export type MaskType = "cpf" | "cnpj" | "date" | "mobile"

export type MaskFormat = {
  format: string
  placeholder: string
}

export type DefaultMaskMapping = Record<MaskType, MaskFormat>

export type Props = ComponentPropsWithoutRef<"input"> & PatternProps
