import { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"p"> & {
  variant: "danger" | "success" | "mobile" | undefined
}
