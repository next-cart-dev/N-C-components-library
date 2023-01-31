import React, { useState } from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const Tooltip = ({
  place = "top",
  tip,
  children,
  type = "dark",
  offset = 14,
  id
}: Props) => {
  const [showTip, setShowTip] = useState(false)

  const oppositeSideToApplySpace = {
    top: "bottom",
    bottom: "top",
    right: "left",
    left: "right"
  }

  return (
    <S.Container
      variant={place}
      data-testid={"box-container" + id}
      onMouseEnter={() => setShowTip(true)}
      id={id}
      onMouseLeave={() => setShowTip(false)}
    >
      {showTip && (
        <S.Tooltip
          css={{
            [oppositeSideToApplySpace[place]]: `calc(100% + ${offset}px)`
          }}
          data-testid={"tooltip" + id}
          id={id + "_" + tip}
        >
          <S.TipContent>
            {tip}
            <S.Arrow variant={place}></S.Arrow>
          </S.TipContent>
        </S.Tooltip>
      )}
      <Box
        data-tip={tip}
        id={id + "_" + tip}
        data-type={type}
        data-testid="children-container"
      >
        {children}
      </Box>
    </S.Container>
  )
}
