import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const ProgressBar = ({ steps, icons, abled }: Props) => {
  return (
    <Box css={{ display: "flex" }}>
      {steps.map((step, i, arr) => {
        return (
          <S.PropgressContainer key={step}>
            <S.StepsContainer>
              <S.Icon variant={abled[i] ? "primary" : "secondary"}>
                {icons && icons[i]}
              </S.Icon>
              <S.Step variant={abled[i] ? "primary" : "secondary"}>
                {step}
              </S.Step>
            </S.StepsContainer>
            {i !== arr.length - 1 && (
              <S.Propgress variant={abled[i] ? "primary" : "secondary"} />
            )}
          </S.PropgressContainer>
        )
      })}
    </Box>
  )
}
