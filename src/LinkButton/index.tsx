import React from "react"
import { Box } from "../Box"
import { Props } from "./types"
import * as S from "./styles"

export const LinkButton = ({ children, onClick }: Props) => {
    return (
        <Box>
            <S.LinkButton onClick={onClick}>{children}</S.LinkButton>
        </Box>
    )
}
