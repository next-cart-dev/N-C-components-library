import React from "react"

import { render, screen, fireEvent, act } from "@testing-library/react"

import { Tooltip } from "."

describe("<Tooltip />", () => {
  it("should render the tooltip correctly", () => {
    render(
      <Tooltip id="1" tip="tooltip tip">
        <div>tooltip</div>
      </Tooltip>
    )

    const boxContainer = screen.getByTestId(/box-container1/)

    act(() => {
      fireEvent.mouseEnter(boxContainer)
    })

    const tooltip = screen.getByText("tooltip tip")

    expect(tooltip).toBeVisible()
  })

  it("should render the children correctly", () => {
    render(
      <Tooltip id="2" tip="tooltip tip">
        <div>tooltip</div>
      </Tooltip>
    )
    const childrenElement = screen.getByText(/tooltip/)
    expect(childrenElement).toBeVisible()
  })
})
