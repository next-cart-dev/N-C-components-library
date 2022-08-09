import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Tooltip } from '.'

describe('<Tooltip />', () => {

    it('should render the tooltip correctly', () => {
        render(<Tooltip tip='tooltip tip'><div>tooltip</div></Tooltip>)
        const sut = screen.getByTestId(/children/)
        fireEvent.mouseEnter(sut)
        expect(sut).toHaveAttribute('aria-describedby')
    })

    it('should render the children correctly', () => {
        render(<Tooltip tip='tooltip tip'><div>tooltip</div></Tooltip>)
        const sut = screen.getByText('tooltip')
        expect(sut).toBeVisible()
    })

    it('should render the container with the class correctly', () => {
        render(<Tooltip tip='tooltip tip'><div>tooltip</div></Tooltip>)
        const sut = screen.getByTestId('container')
        expect(sut.className).toBe('c-dhzjXW')
    })

})