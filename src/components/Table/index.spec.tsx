import React from "react"

import { render, screen } from "@testing-library/react"

import { columnsExample, data } from "./story"

import { Table } from "."

describe("<Table />", () => {
  it("should display the data correctly", async () => {
    render(<Table columns={columnsExample} data={data} />)

    const rows = await screen.findAllByTestId(/table-row-/)

    expect(rows).toHaveLength(10)
  })
})
