import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const ProgressBar = ({ steps, size: sizeProp }: Props) => {
  return (
    <Box css={{ display: "flex" }}>
      {steps.map((step, i, arr) => {
        const size = sizeProp ? sizeProp : "normal"

        return (
          <S.ProgressContainer key={step.label}>
            <S.StepsContainer>
              <S.Icon
                size={size}
                variant={step.active ? "primary" : "secondary"}
              >
                {step.icon}
              </S.Icon>
              <S.Step
                size={size}
                variant={step.active ? "primary" : "secondary"}
              >
                {step.label}
              </S.Step>
            </S.StepsContainer>
            {i !== arr.length - 1 && (
              <S.Progress
                size={size}
                variant={step.active ? "primary" : "secondary"}
              />
            )}
          </S.ProgressContainer>
        )
      })}
    </Box>
  )
}
