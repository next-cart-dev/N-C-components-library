import React from "react"
import { render, screen } from "@testing-library/react"
import { Breadcrumbs } from "."


describe('<Breadcrumbs />', () => {
    it('should render the steps correctly', () => {
        const steps = ['breadcrumbs', 'breadcrumbs']
        render(<Breadcrumbs steps={steps} />)

        for (let s of steps) {
            const elements = screen.getAllByText(s)
            for (let e of elements) {
                expect(e).toBeVisible()
            }
        }
    })

    it('should render the svg icon correctly', () => {
        const steps = ['breadcrumbs', 'breadcrumbs']
        const { getAllByTestId } = render(<Breadcrumbs steps={steps} />)

        const sut = getAllByTestId('svg')
        for (let s of sut) {
            expect(s).toBeVisible()
        }
    })

    it('should render the first steps with the class primary', () => {
        const steps = ['breadcrumbs', 'breadcrumbs']
        render(<Breadcrumbs steps={steps} />)

        for (let i = 0; i < steps.length; i++) {
            const elements = screen.getAllByText(steps[i])

            if (steps.length - 1 != i) {
                expect(elements[i].className).toMatch(/variant-primary/)
            }
        }
    })

    it('should render the last step with the class secondary', () => {
        const steps = ['breadcrumbs', 'breadcrumbs']
        render(<Breadcrumbs steps={steps} />)

        for (let i = 0; i < steps.length; i++) {
            const elements = screen.getAllByText(steps[i])
            if (steps.length - 1 === i) {
                expect(elements[i].className).toMatch(/variant-secondary/)
            }
        }
    })
})