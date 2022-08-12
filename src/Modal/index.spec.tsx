import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Modal } from '.'

const TestComponent = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Modal open={open} onOpenChange={setOpen} trigger={<button data-testid='btn-modal'>Click Me</button>}>
                <h1>helloworld</h1>
                <button data-testid="btn-inner-modal" onClick={() => setOpen(false)}></button>
            </Modal>
        </>
    )
}


describe('<Modal />', () => {
    it('should open modal on btn click', () => {
        render(<TestComponent />)

        const btn = screen.getByTestId('btn-modal')
        fireEvent.click(btn)

        expect(screen.getByText('helloworld')).toBeVisible()
    })

    it('should close modal ons btn click', () => {
        render(<TestComponent />)

        const btn = screen.getByTestId('btn-modal')
        fireEvent.click(btn)
        const content = screen.getByText('helloworld')

        const btnInner = screen.getByTestId('btn-inner-modal')
        fireEvent.click(btnInner)

        expect(content).not.toBeVisible()
    })

})