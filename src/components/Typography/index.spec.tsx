import React from "react"

import { render, screen } from "@testing-library/react"

import { Typography } from "."

describe("<Typography />", () => {
  it("should render with body1 variant by default", async () => {
    render(<Typography>Lorem Ipsum</Typography>)
    const text = await screen.findByText("Lorem Ipsum")

    expect(text.className).toMatch(/variant-body1/)
  })
})
