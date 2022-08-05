import { styled } from "@stitches/react";

export const BreadcrumbsContainer = styled('div', {
    display: "flex",
    alignItems: 'center',
    gap: '10px'
})

export const Step = styled('span', {
    variants: {
        variant: {
            primary: {
                color: '$neutral500'
            },
            secondary: {
                color: '$primary500'
            },
        }
    },
    textTransform: 'capitalize',
    cursor: 'pointer',
    fontFamily: '$fonts$roboto'
})