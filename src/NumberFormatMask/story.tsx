import { NumberFormatMask } from "."
import React from "react"
import { Box } from "../Box";
import { Props } from "./types";

export const InputMaskStory = ({ ...props }: Props) => {
    return (
        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <NumberFormatMask {...props} format='+55 (##) #####-####' label={'Phone'} />
            <NumberFormatMask {...props} format='###.###.###-##' label={'CPF'} />
            <NumberFormatMask {...props} format='##/##/####' label={'Date'} />
            <NumberFormatMask {...props} format='##.###.###/####-##' label={'CNPJ'} />
            <NumberFormatMask {...props} allowPtBrCurrencyFormatter={true} label='Currency' />
        </Box>
    )
}
