import { ComponentPropsWithoutRef } from "react"

import { CSS } from "@stitches/react"

import { config } from "../../stitches.config"

export type Component = "h1" | "h2" | "p" | "span" | "div"

export type Props = ComponentPropsWithoutRef<"div"> & {
  /**
   * The variant to use.
   * @default 'body1'
   */
  variant?: "h1" | "h2" | "body1" | "body2" | "body3"
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, body1 to `<p>`.
   * Use this prop if you wish to change that mapping.
   */
  component?: Component
  /**
   * CSS object for customization.
   */
  css?: CSS<typeof config>
}
