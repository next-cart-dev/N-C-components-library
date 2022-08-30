import React, { useState } from "react"

import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export const Badges = ({
    label,
    type = "badge",
    startIcon,
    endIcon
}: Props) => {
    const [showCloseIcon, setShowCloseIcon] = useState(false)
    const [closeTag, setCloseTag] = useState(false)

    return (
        <Box>
            {type === "tag" ? (
                <S.Tags
                    onMouseEnter={() => setShowCloseIcon(!showCloseIcon)}
                    onMouseLeave={() => setShowCloseIcon(!showCloseIcon)}
                    style={closeTag ? { display: "none" } : {}}
                    data-testid='testid-tag'
                >
                    {label}
                    {showCloseIcon ? (
                        <S.CloseIcon onClick={() => setCloseTag(!closeTag)} data-testid='testid-icon' />
                    ) : null}
                </S.Tags>
            ) : (
                <S.Badges>
                    {startIcon}
                    {label}
                    {endIcon}
                </S.Badges>
            )}
        </Box>
    )
}
