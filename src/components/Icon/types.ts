type IconNames =
  | "currency"
  | "defaultX"
  | "BsChevronBarLeft"
  | "BsFillCaretRightFill"

export type Props = {
  size: "small" | "normal" | "large"
  name: IconNames
  color: string
}
