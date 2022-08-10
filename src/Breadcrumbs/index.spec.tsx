import React from "react"
import { render, screen } from "@testing-library/react"
import { Breadcrumbs } from "."


describe('<Breadcrumbs />', () => {
    it('should render the steps correctly', async () => {
        const steps = ['breadcrumbs', 'breadcrumbs']
        render(<Breadcrumbs steps={steps} />)
        const items = await screen.findAllByText(/breadcrumbs/)
        expect(items).toHaveLength(2)
    })

    it('should render the svg icon correctly', () => {
        const steps = ['breadcrumbs', 'breadcrumbs']
        const { getAllByTestId } = render(<Breadcrumbs steps={steps} />)
        const sut = getAllByTestId('svg')
        expect(sut).toHaveLength(1)
    })

    it('should render the first steps with the class primary', async () => {
        const steps = ['breadcrumbs', 'breadcrumbs']
        render(<Breadcrumbs steps={steps} />)
        const sut = await screen.findAllByText(steps[0])
        expect(sut[0].className).toMatch(/variant-primary/)
    })

    it('should render the last step with the class secondary', async () => {
        const steps = ['breadcrumbs', 'breadcrumbs']
        render(<Breadcrumbs steps={steps} />)
        const sut = await screen.findAllByText(steps[1])
        expect(sut[1].className).toMatch(/variant-secondary/)
    })
})