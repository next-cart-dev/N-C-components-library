import React from "react"

import { render, screen } from "@testing-library/react"

import { TextField } from "../TextField"

import { NumberFormatMask } from "."

describe("<Mask />", () => {
  it("should render input mask correctly", () => {
    render(
      <NumberFormatMask label="test" type={"text"} customInput={TextField} />
    )
    const labelTest = screen.getByText("test")
    expect(labelTest).toBeVisible()
  })

  it("should sort the value correctly", () => {
    render(<NumberFormatMask format={"####-####"} value={"99999999"} />)
    const inputMaskFormat = screen.getByDisplayValue("9999-9999")
    expect(inputMaskFormat).toBeVisible()
  })

  it("should format the currency correctly", () => {
    render(<NumberFormatMask allowPtBrCurrencyFormatter value={"200"} />)
    const inputMaskCurrencyFormatter = screen.getByDisplayValue("R$ 2,00")
    expect(inputMaskCurrencyFormatter).toBeVisible()
  })
})
