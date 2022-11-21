import React, { useState } from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const Badge = ({
  children,
  type = "badge",
  startIcon,
  endIcon,
  id,
  css,
  variant,
  className
}: Props) => {
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const [closeTag, setCloseTag] = useState(false)
  return (
    <Box>
      {type === "tag" ? (
        !closeTag && (
          <S.Tag
            className={className}
            css={{ ...css }}
            onMouseEnter={() => setShowCloseIcon(true)}
            onMouseLeave={() => setShowCloseIcon(false)}
            data-testid={`tag-${id}`}
          >
            {children}
            {showCloseIcon && (
              <S.CloseIcon
                onClick={() => setCloseTag(true)}
                data-testid={`tag-${id}-delete-button`}
              />
            )}
          </S.Tag>
        )
      ) : (
        <S.Badge className={className} variant={variant} css={css}>
          <S.IconContainer>{startIcon}</S.IconContainer>
          {children}
          <S.IconContainer>{endIcon}</S.IconContainer>
        </S.Badge>
      )}
    </Box>
  )
}
