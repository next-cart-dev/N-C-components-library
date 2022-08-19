import React from "react"

import { render, screen } from "@testing-library/react"

import { Alert } from "."

describe("<Alert />", () => {
  it("should display a message", async () => {
    render(<Alert message="Texto exemplo" />)

    const message = await screen.findByText("Texto exemplo")

    expect(message).toBeVisible()
  })

  it("should display a message and a title", async () => {
    render(<Alert title="Exemplo" message="Texto exemplo" />)

    const title = await screen.findByText("Exemplo")
    const message = await screen.findByText("Texto exemplo")

    expect(title).toBeVisible()
    expect(message).toBeVisible()
  })
})
