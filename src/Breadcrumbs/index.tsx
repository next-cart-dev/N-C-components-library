import React from "react";
import VectorSVG from "../Icon/assets/vector.svg";
import * as S from './styles'
import { Props } from "./types";

export const Breadcrumbs = ({ steps }: Props) => {
    return (
        <S.BreadcrumbsContainer>
            {steps.map((e: string, i: number, a: Array<string>) => {
                const condition = a.length - 1 != i

                return (
                    <S.BreadcrumbsContainer key={i}>
                        {condition ? <S.Step variant={'primary'}>{e}</S.Step> : <S.Step variant={'secondary'}>{e}</S.Step>}
                        {condition ? <VectorSVG /> : ''}
                    </S.BreadcrumbsContainer>
                )
            })}
        </S.BreadcrumbsContainer>
    )
}