import * as React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { DropDown } from "."
jest.mock("../Icon/assets/ArrowDown.svg", () => "Icon")
jest.mock("../Icon/assets/briefcase.svg", () => "Icon")

describe("<DropDown />", () => {
  it("should render the DropDown correctly", async () => {
    render(
      <DropDown
        size="normal"
        variant="secondary"
        id={"exemplo"}
        arialLabel="exemplo"
        dropDownItems={[{ label: "exemplo" }, { label: "exemplo" }]}
      >
        Acessar
      </DropDown>
    )
    const dropDown = await screen.findByText("Acessar")

    expect(dropDown).toBeVisible()
  })
  it("should render the button with the variant primary by default", async () => {
    render(
      <DropDown
        size="normal"
        id={"exemplo"}
        arialLabel="exemplo"
        dropDownItems={[{ label: "exemplo" }, { label: "exemplo" }]}
      >
        Acessar
      </DropDown>
    )
    const dropDown = await screen.findByText("Acessar")

    expect(dropDown.className).toMatch(/variant-primary/)
  })
  it("should render the button with the variant secoundary", async () => {
    render(
      <DropDown
        size="normal"
        id={"exemplo"}
        arialLabel="exemplo"
        variant="secondary"
        dropDownItems={[{ label: "exemplo" }, { label: "exemplo" }]}
      >
        Acessar
      </DropDown>
    )
    const dropDown = await screen.findByText("Acessar")

    expect(dropDown.className).toMatch(/variant-secondary/)
  })
  it("should render the icon", async () => {
    render(
      <DropDown
        size="normal"
        id={"icon"}
        arialLabel="exemplo"
        withIcon
        variant="secondary"
        dropDownItems={[{ label: "exemplo" }, { label: "exemplo" }]}
      >
        Acessar
      </DropDown>
    )
    const dropDown = await screen.findByTestId("icon")

    expect(dropDown).toBeVisible()
  })
  it("should render Menu Items", async () => {
    render(
      <DropDown
        size="normal"
        id={"icon"}
        arialLabel="exemplo"
        withIcon
        variant="secondary"
        dropDownItems={[{ label: "exemplo" }, { label: "exemplo" }]}
      >
        Acessar
      </DropDown>
    )
    const dropDown = await screen.findByText("Acessar")
    await userEvent.click(dropDown)
    const labelItem = await screen.findByLabelText("exemplo")
    expect(labelItem).toBeVisible()
  })
})
