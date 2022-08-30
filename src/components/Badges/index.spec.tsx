import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import { Badges } from '.'

describe('<Badges />', () => {
    it('should show th icon and close the tag with icon click', () => {
        render(<Badges label="teste" type='tag' />)
        const tag = screen.getByTestId('testid-tag')
        fireEvent.mouseEnter(tag)

        const btnClose = screen.getByTestId('testid-icon')
        fireEvent.click(btnClose)
        expect(screen.getByText('teste')).not.toBeVisible()
    })
})