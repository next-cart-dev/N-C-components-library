import React from "react"

import { render, screen } from "@testing-library/react"

import { CounterItems } from "."

describe("<CounterItems />", () => {
  it("should render the result 0 - 0  de 0", () => {
    render(
      <CounterItems
        pagination={{
          pageSize: 0,
          itemCount: 0,
          pageIndex: 0,
          pageCount: 0
        }}
      />
    )
    const counter = screen.getByText("Resultado: 0 - 0 de 0")
    expect(counter).toBeVisible()
  })

  it("should render the result 1 - 3  de 12", () => {
    render(
      <CounterItems
        pagination={{
          pageSize: 3,
          itemCount: 12,
          pageIndex: 0,
          pageCount: 4
        }}
      />
    )
    const counter = screen.getByText("Resultado: 1 - 3 de 12")
    expect(counter).toBeVisible()
  })

  it("should render the result 13 - 13 de 13", () => {
    render(
      <CounterItems
        pagination={{
          pageSize: 3,
          itemCount: 13,
          pageIndex: 4,
          pageCount: 5
        }}
      />
    )
    const counter = screen.getByText("Resultado: 13 - 13 de 13")
    expect(counter).toBeVisible()
  })
})
