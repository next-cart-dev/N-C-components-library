import React, { useState } from "react"

import { render, screen, fireEvent } from "@testing-library/react"

import { DropDown, DropDownElements } from "."

const DropDownTest = () => {
  const [checkedIcon, setCheckedIcon] = useState(false)
  const [radio, setRadio] = useState("radio_1")

  return (
    <DropDown data-testid="trigger" TriggerElementRef={"trigger"}>
      <h1 data-testid="content">content</h1>
      <DropDownElements.Sub>
        <DropDownElements.SubTrigger data-testid="subTrigger-testid">
          sub trigger
        </DropDownElements.SubTrigger>
        <DropDownElements.SubContent>sub content</DropDownElements.SubContent>
        <DropDownElements.CheckboxItem
          data-testid="checkbox-testid"
          checked={checkedIcon}
          onCheckedChange={setCheckedIcon}
        >
          {checkedIcon}
          checkbox item
        </DropDownElements.CheckboxItem>
        <DropDownElements.RadioGroup value={radio} onValueChange={setRadio}>
          <DropDownElements.RadioItem value="radio_1">
            radio item 1
          </DropDownElements.RadioItem>
          <DropDownElements.RadioItem
            data-testid="radio-testid"
            value="radio_2"
          >
            {radio}
            radio item 2
          </DropDownElements.RadioItem>
        </DropDownElements.RadioGroup>
      </DropDownElements.Sub>
    </DropDown>
  )
}

describe("<DropDown />", () => {
  it.skip("should open the dropdown menu with button click", async () => {
    render(<DropDownTest />)
    const trigger = screen.getByTestId("trigger-testid")
    fireEvent.pointerDown(trigger)
    expect(screen.getByTestId("content")).toBeVisible()
  })

  it.skip("should close the dropdown menu with window click", () => {
    render(<DropDownTest />)
    fireEvent.click(window)
    expect(screen.getByText(/sub content/)).not.toBeVisible()
  })

  it.skip("should open the sub menu with mouse enter", () => {
    render(<DropDownTest />)
    const trigger = screen.getByTestId(/trigger-testid/)
    fireEvent.pointerDown(trigger)

    const subTrigger = screen.getByTestId(/subTrigger-testid/)
    fireEvent.mouseEnter(subTrigger)

    expect(screen.getByText(/sub content/)).toBeVisible
  })

  it.skip("should leave the checkbox checked with click", () => {
    render(<DropDownTest />)
    const trigger = screen.getByTestId(/trigger-testid/)
    fireEvent.pointerDown(trigger)

    const checkbox = screen.getByTestId(/checkbox-testid/)
    fireEvent.click(checkbox)

    expect(screen.getByText("true")).toBeInTheDocument()
  })

  it.skip("should change the checked radio with click", () => {
    render(<DropDownTest />)
    const trigger = screen.getByTestId(/trigger-testid/)
    fireEvent.pointerDown(trigger)

    const radio = screen.getByTestId(/checkbox-testid/)
    fireEvent.click(radio)

    expect(screen.getByText("radio_2")).toBeInTheDocument()
  })
})
