import React from "react"

import * as S from "./styles"
import { Props } from "./types"

import { IconSvg } from "../Icon/svg"

export const Breadcrumbs = ({ steps, url, icons = [''] }: Props) => {
  return (
    <S.BreadcrumbsContainer>
      {steps.map((e: string, i: number, a: Array<string>) => {
        const condition = a.length - 1 != i

        return (
          <S.BreadcrumbsContainer key={i}>
            {icons[i]}
            {condition ? (
              <S.Step variant={"primary"}>{e}</S.Step>
            ) : (
              <S.Step href={url} variant={"secondary"}>{e}</S.Step>
            )}
            {condition ? <IconSvg /> : ""}
          </S.BreadcrumbsContainer>
        )
      })}
    </S.BreadcrumbsContainer>
  )
}
