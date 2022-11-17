import React from "react"

import { render, screen, fireEvent } from "@testing-library/react"

import { TextFieldMask } from "."

describe("<TextFieldMask />", () => {
  it("should render input label correctly", () => {
    render(<TextFieldMask label="test" type={"text"} />)
    const labelTest = screen.getByText("test")
    expect(labelTest).toBeVisible()
  })

  it("should sort the value correctly", () => {
    render(<TextFieldMask format={"####-####"} value={"99999999"} />)
    const inputMaskFormat = screen.getByDisplayValue("9999-9999")
    expect(inputMaskFormat).toBeVisible()
  })

  it("should format currencies values correctly", () => {
    const { container } = render(<TextFieldMask formatMaskToUse="currency" />)
    const input = container.querySelector('input[name="currency"]') as Element
    fireEvent.change(input, { target: { value: "200" } })
    const inputMaskCurrencyFormatter = screen.getByDisplayValue("R$ 2,00")
    expect(inputMaskCurrencyFormatter).toBeVisible()
  })

  it("should format cpf correctly", () => {
    render(<TextFieldMask formatMaskToUse="cpf" value={"12345678901"} />)
    const inputMaskCurrencyFormatter =
      screen.getByDisplayValue("123.456.789-01")
    expect(inputMaskCurrencyFormatter).toBeVisible()
  })

  it("should format cnpj correctly", () => {
    render(<TextFieldMask formatMaskToUse="cnpj" value={"92281839000163"} />)
    const inputMaskCurrencyFormatter =
      screen.getByDisplayValue("92.281.839/0001-63")
    expect(inputMaskCurrencyFormatter).toBeVisible()
  })

  it("should format mobile phone correctly", () => {
    render(<TextFieldMask formatMaskToUse="mobile" value={"11988223355"} />)
    const inputMaskCurrencyFormatter = screen.getByDisplayValue(
      "+55 (11) 98822-3355"
    )
    expect(inputMaskCurrencyFormatter).toBeVisible()
  })
})
