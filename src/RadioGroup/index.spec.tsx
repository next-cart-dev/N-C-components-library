import React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { RadioGroup } from "./index"

describe("<RadioGroup />", () => {
  it("should render correctly", async () => {
    render(
      <RadioGroup
        defaultValue="1"
        radioItems={[{ id: "exemplo", value: "1", label: "exemplo" }]}
        position="flex"
      />
    )

    const RadioExemplo = await screen.findByTestId("exemplo")

    expect(RadioExemplo).toBeVisible()
  })
  it("should contain a label", async () => {
    render(
      <RadioGroup
        defaultValue="1"
        radioItems={[{ id: "exemplo", value: "1", label: "Exemplo" }]}
        position="flex"
      />
    )

    const labelExemplo = await screen.findByLabelText("Exemplo")

    expect(labelExemplo).toBeVisible()
  })
  it("should disabled", async () => {
    render(
      <RadioGroup
        defaultValue="1"
        radioItems={[
          { id: "exemplo3", value: "1", label: "exemplo", disabled: true }
        ]}
        position="flex"
      />
    )

    const checkBoxDisabled = await screen.findByTestId("exemplo3")

    expect(checkBoxDisabled).toBeDisabled()
  })
  it("should execute the callback passed to the onClick prop", async () => {
    const clickMock = jest.fn()
    render(
      <RadioGroup
        defaultValue="1"
        radioItems={[
          { id: "exemplo6", value: "1", label: "exemplo", disabled: true }
        ]}
        position="flex"
        onValueChange={clickMock}
      />
    )
    const checkedClick = await screen.findByTestId("exemplo6")

    await userEvent.click(checkedClick)

    expect(clickMock).toHaveBeenCalledTimes(1)
  })
})
