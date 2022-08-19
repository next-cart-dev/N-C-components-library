import React, { useState } from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"
import { Icon } from "../Icon"

export const Alert = ({
  id,
  message,
  title,
  icon,
  canCloseAlert,
  variant = "info"
}: Props) => {
  const [open, setOpen] = useState<boolean>(true)

  const setIconColor = (alertVariant: typeof variant) => {
    const colors = {
      info: "$info700",
      warning: "$warning700",
      danger: "$danger700",
      success: "$success700"
    }

    return colors[alertVariant]
  }

  return (
    <S.Alert
      id={id}
      variant={variant}
      role="alert"
      css={{ display: open ? "flex" : "none", alignItems: "center" }}
    >
      {icon && (
        <Box
          css={{ display: "flex", alignItems: "center", marginRight: "$16" }}
        >
          {icon}
        </Box>
      )}
      <Box css={{ display: "flex", flexFlow: "column" }}>
        {title && (
          <Box css={{ marginBottom: "$4" }}>
            <S.AlertTitle>{title}</S.AlertTitle>
          </Box>
        )}
        {message && <S.AlertMessage>{message}</S.AlertMessage>}
      </Box>
      {canCloseAlert && (
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            cursor: "pointer"
          }}
          onClick={() => setOpen(false)}
        >
          <Icon name="defaultX" size="large" color={setIconColor(variant)} />
        </Box>
      )}
    </S.Alert>
  )
}
