import React, { useState } from "react"

import * as S from "./styles"
import { Props } from "./types"

export const Badge = ({
  children,
  type = "badge",
  startIcon,
  endIcon,
  id,
  css,
  variant,
  className,
  onDelete
}: Props) => {
  const [closeTag, setCloseTag] = useState(false)

  const handleOnDelete = () => {
    onDelete?.()
    setCloseTag(true)
  }

  return (
    <>
      {type === "tag" ? (
        !closeTag && (
          <S.Tag
            className={className}
            css={{ ...css }}
            data-testid={`tag-${id}`}
          >
            {children}
            <S.CloseIcon
              onClick={handleOnDelete}
              data-testid={`tag-${id}-delete-button`}
            />
          </S.Tag>
        )
      ) : (
        <S.Badge className={className} variant={variant} css={css}>
          <S.IconContainer>{startIcon}</S.IconContainer>
          {children}
          <S.IconContainer>{endIcon}</S.IconContainer>
        </S.Badge>
      )}
    </>
  )
}
