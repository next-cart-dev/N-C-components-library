import { ReactNode } from "react"

export type Props = {
  /**
   * The bar progress values
   * @options ['']
   */
  steps: string[]
  /**
   * Icon that will be on the side of the step
   * @example <ProgressBar icons={[<ReactIcon />, <ReactIcon />]} />
   */
  icons?: ReactNode[]
  /**
   * It will set if the step is abled
   * @default false
   */
  abled: "abled"[]
}
