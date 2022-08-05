import React from "react"
import { render, screen } from "@testing-library/react"
import { Breadcrumbs } from "."

describe('<Breadcrumbs />', () => {
    it("should be rendering the step values", async () => {
        render(<Breadcrumbs steps={['breadcrumbs', 'breadcrumbs']} />)
        const breadcrumbs = await screen.findAllByText('Breadcrumbs')
        expect(breadcrumbs).toBeVisible()
    })
})