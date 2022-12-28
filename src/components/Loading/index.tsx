import React from "react"

import MoonLoader from "react-spinners/MoonLoader"

import { Box } from "../Box"

export type Props = {
  color?: string
  size?: number | string
  loading?: boolean
  speedMultiplier?: number
}

export const Loading = ({
  color = "#4a368c",
  size = "100px",
  ...props
}: Props) => {
  return (
    <Box>
      <MoonLoader color={color} size={size} {...props} />
    </Box>
  )
}
