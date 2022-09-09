import { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"div"> & {
  variant: "primary" | "secondary" | "tertiary"
}
