import * as S from './styles'
import React from 'react'
import { Props } from './types'

export const Color = ({ labelName, labelColor, bg }: Props) => {
    return (
        <S.ColorContainer>
            <S.Color style={{ background: bg }} />
            <S.ColorName>
                <S.Span variant={'primary'}>{labelName}</S.Span>
                <S.Span variant={'secondary'}>{labelColor}</S.Span>
            </S.ColorName>
        </S.ColorContainer>
    )
}