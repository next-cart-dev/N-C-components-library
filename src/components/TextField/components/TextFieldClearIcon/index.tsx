import React from "react"

import { MdClear } from "react-icons/md"

import { TextFieldClearIconProps } from "./types"

import { Box } from "../../../Box"
import { Icon } from "../../../Icon"

export const TextFieldClearIcon = ({
  onClear,
  adornment,
  padding
}: TextFieldClearIconProps) => {
  return (
    <Box onClick={onClear}>
      <Icon
        size="medium"
        icon={<MdClear />}
        css={{
          position: "absolute",
          right: adornment?.position === "right" ? padding : "$16",
          top: "$16",
          cursor: "pointer",
          color: "$secondary500",
          "&:hover": { color: "$secondary700" }
        }}
      />
    </Box>
  )
}
