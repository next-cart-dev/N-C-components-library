import { ReactNode } from "react"

type Step = {
  label: string
  icon?: ReactNode
  active?: boolean
}

export type Props = {
  /**
   * The bar progress values
   */
  steps: Step[]
}
