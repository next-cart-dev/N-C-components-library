import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const Tooltip = ({
  effect = "solid",
  place = "top",
  tip,
  children,
  type = "dark",
  id,
  border
}: Props) => {
  return (
    <Box style={{ display: "flex" }} data-testid="box-container">
      <Box data-testid="tooltip">
        <S.ReactTooltipStyled
          effect={effect}
          place={place}
          id={id}
          border={border}
          data-class="tooltip"
        />
      </Box>
      <Box
        data-tip={tip}
        data-for={id}
        data-type={type}
        data-testid="children-container"
      >
        {children}
      </Box>
    </Box>
  )
}
