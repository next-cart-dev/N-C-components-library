import type { CheckedState } from "@radix-ui/react-checkbox"

export type Props = {
  id: string
  label: string
  checked?: CheckedState
  onCheckedChange?: (checked: CheckedState) => void
  disabled?: boolean
  ariaControls?: string
}
