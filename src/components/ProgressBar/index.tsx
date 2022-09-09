import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const ProgressBar = ({ steps }: Props) => {
  return (
    <Box css={{ display: "flex" }}>
      {steps.map((step, i, arr) => {
        return (
          <S.ProgressContainer key={step.label}>
            <S.StepsContainer>
              <S.Icon variant={step.active ? "primary" : "secondary"}>
                {step.icon}
              </S.Icon>
              <S.Step variant={step.active ? "primary" : "secondary"}>
                {step.label}
              </S.Step>
            </S.StepsContainer>
            {i !== arr.length - 1 && (
              <S.Progress variant={step.active ? "primary" : "secondary"} />
            )}
          </S.ProgressContainer>
        )
      })}
    </Box>
  )
}
