import React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Tooltip } from "."

describe("<Tooltip />", () => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }))

  afterEach(jest.clearAllMocks)

  it("should render the tooltip correctly", async () => {
    render(
      <Tooltip id="1" tip="tip">
        <div>tooltip</div>
      </Tooltip>
    )

    const boxContainer = await screen.findByText("tooltip")

    await userEvent.hover(boxContainer)

    const tooltip = await screen.findAllByText("tip")

    expect(tooltip[0]).toBeVisible()
  })

  it("should render the children correctly", async () => {
    render(
      <Tooltip id="2" tip="tip">
        <div>tooltip</div>
      </Tooltip>
    )

    const childrenElement = await screen.findByText("tooltip")
    expect(childrenElement).toBeVisible()
  })
})
