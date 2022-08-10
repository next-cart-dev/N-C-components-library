import {styled} from '../stitches.config'
import * as Dialog from '@radix-ui/react-dialog';


export const DialogContent = styled(Dialog.Content, {
    width: '408px',
    height: '223px',
    border: '1px solid $background500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
})

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

export const ContainerDialogsClose = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '$lg'
})

export const DialogClose = styled(Dialog.Close, {
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