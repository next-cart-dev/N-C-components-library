import React from "react"
import ReactTooltip from 'react-tooltip'
import * as S from './styles'
import { Props } from "./types"

export const Tooltip = ({ effect, place, tip, children, type }: Props) => {
    /**
     * @description the ReactTooltip Component need a different id
     */

    const id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) + tip
    return (
        <S.Container data-testid="container">
            <div data-testid='tooltip'>
                <ReactTooltip effect={effect?.length ? effect : 'solid'} place={place?.length ? place : 'top'} id={id} border />
            </div>
            <div data-tip={tip} data-for={id} data-type={type} data-testid='children'>
                {children}
            </div>
        </S.Container>
    )
}