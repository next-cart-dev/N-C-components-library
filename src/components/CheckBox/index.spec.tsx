import React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Checkbox } from "./index"

describe("<Checkbox />", () => {
  it("should render correctly", async () => {
    render(<Checkbox id="check" label="Checkbox" />)

    const checkbox = await screen.findByLabelText("Checkbox")

    expect(checkbox).toBeVisible()
  })

  it("should disabled", async () => {
    render(<Checkbox id="check" label="Checkbox" disabled />)

    const checkbox = await screen.findByLabelText("Checkbox")

    expect(checkbox).toBeDisabled()
  })

  it("should check the checkbox on click", async () => {
    render(<Checkbox id="check" label="Checkbox" />)

    const checkbox = await screen.findByLabelText("Checkbox")

    await userEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })
})
