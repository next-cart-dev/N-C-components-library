import React from "react"

import { fireEvent, render, screen } from "@testing-library/react"

import { Badge } from "."

describe("<Badge />", () => {
  it("children should be visible", () => {
    render(
      <Badge id="1" type="tag">
        teste children
      </Badge>
    )
    expect(screen.getByText(/teste children/)).toBeVisible()
  })

  it.skip("should show the icon and close the tag with icon click", () => {
    render(
      <Badge id="1" type="tag">
        teste children
      </Badge>
    )
    const tag = screen.getByTestId(/tag-1/)
    fireEvent.mouseEnter(tag)

    const btnClose = screen.getByTestId(/tag-1-delete-button/)
    fireEvent.click(btnClose)

    expect(tag).not.toBeVisible()
  })
})
