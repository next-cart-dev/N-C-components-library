import { Size } from "../../types"
import { ButtonProps } from "../Button/types"

export type IconButtonProps = Omit<
  ButtonProps,
  "children" | "startIcon" | "endIcon"
> & {
  size: Size
  icon: React.ReactNode
}
