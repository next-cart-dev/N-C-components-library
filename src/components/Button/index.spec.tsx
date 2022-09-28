import React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Button } from "."

describe("<Button />", () => {
  it("should render the button correctly", async () => {
    render(<Button>Acessar</Button>)

    const button = await screen.findByText("Acessar")

    expect(button).toBeVisible()
  })

  it("should render the button with the variant primary by default", async () => {
    render(<Button>Acessar</Button>)

    const button = await screen.findByText("Acessar")

    expect(button.className).toMatch(/variant-primary/)
  })

  it("should render the button with the variant secondary", async () => {
    render(<Button variant="secondary">Acessar</Button>)

    const button = await screen.findByText("Acessar")

    expect(button.className).toMatch(/variant-secondary/)
  })

  it("should render the button with the size as medium by default", async () => {
    render(<Button variant="secondary">Acessar</Button>)

    const button = await screen.findByText("Acessar")

    expect(button.className).toMatch(/size-medium/)
  })

  it("should render the button with the size as small", async () => {
    render(
      <Button variant="secondary" size="small">
        Acessar
      </Button>
    )

    const button = await screen.findByText("Acessar")

    expect(button.className).toMatch(/size-small/)
  })

  it("should render the button with the size as large", async () => {
    render(
      <Button variant="secondary" size="large">
        Acessar
      </Button>
    )

    const button = await screen.findByText("Acessar")

    expect(button.className).toMatch(/size-large/)
  })

  it("should execute the callback passed to the onClick prop", async () => {
    const clickMock = jest.fn()
    render(
      <Button variant="secondary" size="large" onClick={clickMock}>
        Acessar
      </Button>
    )

    const button = await screen.findByText("Acessar")

    await userEvent.click(button)

    expect(clickMock).toHaveBeenCalledTimes(1)
  })
})
