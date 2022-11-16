import React from "react"

import { Props } from "./types"

import { Box } from "../Box"

export const FormGroup = ({ children, ...props }: Props) => {
  return <Box {...props}>{children}</Box>
}
