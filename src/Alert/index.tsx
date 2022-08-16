import React, { useState } from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const Alert = ({
  id,
  message,
  title,
  icon,
  canCloseAlert,
  variant = "info"
}: Props) => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <S.Alert
      id={id}
      variant={variant}
      role="alert"
      css={{ display: open ? "flex" : "none" }}
    >
      {icon && (
        <Box
          css={{ display: "flex", alignItems: "center", marginRight: "$16" }}
        >
          icone
        </Box>
      )}
      <Box css={{ display: "flex", flexFlow: "column" }}>
        <Box css={{ marginBottom: "$4" }}>
          {title && <S.AlertTitle>{title}</S.AlertTitle>}
        </Box>
        {message && <S.AlertMessage>{message}</S.AlertMessage>}
      </Box>
      {canCloseAlert && (
        <Box css={{ marginLeft: "auto" }}>
          <Box
            css={{ all: "unset", cursor: "pointer" }}
            as="button"
            onClick={() => setOpen(false)}
          >
            close
          </Box>
        </Box>
      )}
    </S.Alert>
  )
}
