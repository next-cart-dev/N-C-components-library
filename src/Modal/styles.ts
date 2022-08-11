import { styled, keyframes } from '../stitches.config'
import * as Dialog from '@radix-ui/react-dialog';

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

export const StyledOverlay = styled(Dialog.Overlay, {
    backgroundColor: 'rgba(0, 0, 0, 0.44)',
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
});

export const DialogContent = styled(Dialog.Content, {
    backgroundColor: '$background100',
    minWidth: '408px',
    minHeight: '223px',
    border: '1px solid $background500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

})

/**
 * Optional Use
 */

export const DialogTitle = styled(Dialog.Title, {
    color: '$primary800',
    fontFamily: '$roboto',
    fontWeight: '$normal',
    letterSpacing: '$0.32',
    lineHeight: '$1',
    fontSize: '$28',
    margin: '0'
})

export const DialogDescription = styled(Dialog.Description, {
    color: '#191B22',
    fontFamily: '$roboto',
    fontWeight: '$normal',
    letterSpacing: '$0.5',
    lineHeight: '$4',
    fontSize: '$18'
})

export const ModalButton = styled('button', {
    width: '125.75px',
    padding: '10px',
    fontFamily: '$roboto',
    fontWeight: '$medium',
    letterSpacing: '$0.5',
    outline: '0',
    cursor: 'pointer',
    fontSize: '$18',
    lineHeight: '$6',
    variants: {
        variant: {
            primary: {
                backgroundColor: '$background100',
                border: '1px solid #247691',
                color: '#247691'
            },
            secondary: {
                backgroundColor: '#00699B',
                color: '$neutral100',
                border: '0'
            }
        }
    }
})