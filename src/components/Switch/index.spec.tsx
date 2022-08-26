// eslint-disable-next-line import/no-unresolved
import React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Switch } from "./index"

describe("<Switch />", () => {
  it("should render a correctly Switch", async () => {
    render(<Switch id="exemplo" />)

    const switchExemplo = await screen.findByTestId("exemplo")

    expect(switchExemplo).toBeVisible()
  })
  it("should contain a label", async () => {
    render(<Switch id="exemplo2" label="Exemplo" />)

    const labelExemplo = await screen.findByLabelText("Exemplo")

    expect(labelExemplo).toBeVisible()
  })
  it("should disabled", async () => {
    render(<Switch id="exemplo3" disabled />)

    const switchDisabled = await screen.findByTestId("exemplo3")

    expect(switchDisabled).toBeDisabled()
  })
  it("should variant primary is correctly", async () => {
    render(<Switch id="exemplo4" variant="primary" />)

    const SwitchVariantPrimary = await screen.findByTestId("exemplo4")

    expect(SwitchVariantPrimary.className).toMatch(/variant-primary/)
  })
  it("should variant neutral is correctly", async () => {
    render(<Switch id="exemplo5" variant="neutral" />)

    const SwitchVariantNeutral = await screen.findByTestId("exemplo5")

    expect(SwitchVariantNeutral.className).toMatch(/variant-neutral/)
  })
  it("should execute the callback passed to the onClick prop", async () => {
    const clickMock = jest.fn()
    render(<Switch id={"exemplo6"} onClick={clickMock} />)

    const switchClicked = await screen.findByTestId("exemplo6")

    await userEvent.click(switchClicked)

    expect(clickMock).toHaveBeenCalledTimes(1)
  })
})
