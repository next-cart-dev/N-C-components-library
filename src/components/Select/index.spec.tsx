import React from "react"

import { render, screen } from "@testing-library/react"
import selectEvent from "react-select-event"

import { Select } from "."

const SelectTest = () => {
  return (
    <form data-testid="form">
      <Select
        options={[
          { value: "red", label: "red" },
          { value: "blue", label: "blue" }
        ]}
        id="1"
        name="color"
        inputId="color"
        label="Color"
      />
    </form>
  )
}

describe("<Select />", () => {
  it("should not have select values", async () => {
    render(<SelectTest />)
    expect(screen.getByTestId("form")).toHaveFormValues({ color: "" })
  })

  it("should select value red", async () => {
    render(<SelectTest />)
    await selectEvent.select(screen.getByLabelText("Color"), "red")
    expect(screen.getByTestId("form")).toHaveFormValues({ color: "red" })
  })

  it("should add more another select value", async () => {
    render(<SelectTest />)
    await selectEvent.select(screen.getByLabelText("Color"), "blue")
    expect(screen.getByTestId("form")).toHaveFormValues({
      color: "blue"
    })
  })
})
