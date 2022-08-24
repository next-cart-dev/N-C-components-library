import React from "react"

import { render, screen } from "@testing-library/react"

import { Breadcrumbs } from "."

describe("<Breadcrumbs />", () => {
  it.skip("should render the steps and icons correctly", async () => {
    const steps = ["breadcrumbs", "breadcrumbs"]
    render(<Breadcrumbs steps={steps} icons={["icon", "icon"]} />)
    const items = await screen.findAllByText(/breadcrumbs/)
    const icons = await screen.findAllByText(/icon/)
    expect(icons).toHaveLength(2)
    expect(items).toHaveLength(2)
  })

  it.skip("should render the svg icon correctly", () => {
    const steps = ["breadcrumbs", "breadcrumbs"]
    const { getAllByTestId } = render(<Breadcrumbs steps={steps} />)
    const sut = getAllByTestId("svg")
    expect(sut).toHaveLength(1)
  })

  it.skip("should render the first steps with the class primary", async () => {
    const steps = ["breadcrumbs", "breadcrumbs"]
    render(<Breadcrumbs steps={steps} />)
    const sut = await screen.findAllByText(steps[0])
    expect(sut[0].className).toMatch(/variant-primary/)
  })

  it.skip("should render the last step with the class secondary", async () => {
    const steps = ["breadcrumbs", "breadcrumbs"]
    render(<Breadcrumbs steps={steps} />)
    const sut = await screen.findAllByText(steps[1])
    expect(sut[1].className).toMatch(/variant-secondary/)
  })
})
