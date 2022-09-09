import React from "react"

import { render, screen } from "@testing-library/react"

import { ProgressBar } from "."

describe("<ProgressBar />", () => {
  it("should receive the step correctly", async () => {
    render(<ProgressBar steps={[{ label: "step" }, { label: "step" }]} />)
    const steps = await screen.findAllByText(/step/)
    expect(steps).toHaveLength(2)
  })

  it("should set if the step is abled", async () => {
    render(
      <ProgressBar
        steps={[{ label: "step", active: true }, { label: "step" }]}
      />
    )
    const steps = await screen.findAllByText(/step/)
    expect(steps[0].className).toMatch(/variant-primary/)
  })

  it("should set if the step is disabled", async () => {
    render(
      <ProgressBar
        steps={[{ label: "step", active: true }, { label: "step" }]}
      />
    )
    const steps = await screen.findAllByText(/step/)
    expect(steps[1].className).toMatch(/variant-secondary/)
  })
})
