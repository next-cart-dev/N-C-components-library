import React from "react"
import { Box } from "../Box"
import { Props } from "./types"
import * as S from "./styles"

export const LinkButton = ({ ...props }: Props) => {
    return (
        <Box>
            <S.LinkButton {...props}>{props.children}</S.LinkButton>
        </Box>
    )
}
