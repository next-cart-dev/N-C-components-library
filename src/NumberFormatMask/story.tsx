import { NumberFormatMask } from "."
import React from "react"
import { Box } from "../Box";
import { Props } from "./types";

export const InputMaskStory = ({ ...props }: Props) => {
    return (
        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <NumberFormatMask {...props} placeholder='+55 (##) #####-####' format='+55 (##) #####-####' label={'Phone'} />
            <NumberFormatMask {...props} placeholder='###.###.###-##' format='###.###.###-##' label={'CPF'} />
            <NumberFormatMask {...props} placeholder='##/##/####' format='##/##/####' label={'Date'} />
            <NumberFormatMask {...props} placeholder='##.###.###/####-##' format='##.###.###/####-##' label={'CNPJ'} />
            <NumberFormatMask {...props} placeholder='R$ #.###,##' allowPtBrCurrencyFormatter={true} label='Currency' />
        </Box>
    )
}
