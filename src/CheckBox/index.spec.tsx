import React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Checkbox } from "./index"

describe("<Checkbox />", () => {
  it("should render correctly", async () => {
    render(<Checkbox id="exemplo" />)

    const checkboxExemplo = await screen.findByTestId("exemplo")

    expect(checkboxExemplo).toBeVisible()
  })
  it("should contain a label", async () => {
    render(<Checkbox id="exemplo2" label="Exemplo" />)

    const labelExemplo = await screen.findByLabelText("Exemplo")

    expect(labelExemplo).toBeVisible()
  })
  it("should disabled", async () => {
    render(<Checkbox id="exemplo3" disabled />)

    const checkBoxDisabled = await screen.findByTestId("exemplo3")

    expect(checkBoxDisabled).toBeDisabled()
  })
  it("should execute the callback passed to the onClick prop", async () => {
    const clickMock = jest.fn()
    render(<Checkbox id="exemplo6" onClick={clickMock} />)

    const checkedClick = await screen.findByTestId("exemplo6")

    await userEvent.click(checkedClick)

    expect(clickMock).toHaveBeenCalledTimes(1)
  })
})
