import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Tooltip } from '.'

describe('<Tooltip />', () => {

    it('should render the tooltip correctly', () => {
        render(<Tooltip id='1' tip='tooltip tip'><div>tooltip</div></Tooltip>)
        const childrenContainer = screen.getByTestId(/children-container/)
        fireEvent.mouseEnter(childrenContainer)
        expect(childrenContainer).toHaveAttribute('aria-describedby')
    })

    it('should render the children correctly', () => {
        render(<Tooltip id='2' tip='tooltip tip'><div>tooltip</div></Tooltip>)
        const childrenElement = screen.getByText(/tooltip/)
        expect(childrenElement).toBeVisible()
    })

    it('should render the container with the style correctly', () => {
        render(<Tooltip id='3' tip='tooltip tip'><div>tooltip</div></Tooltip>)
        const boxContainer = screen.getByTestId(/box-container/)
        expect(boxContainer).toHaveStyle({ display: 'flex' })
    })

})