import React, { useState } from "react"

import { fireEvent, render, screen } from "@testing-library/react"

import { Modal } from "."

const TestComponent = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal
        open={open}
        onOpenChange={setOpen}
        trigger={<button data-testid="btn-modal">Click Me</button>}
      >
        <h1>helloworld</h1>
        <button
          data-testid="btn-inner-modal"
          onClick={() => setOpen(false)}
        ></button>
      </Modal>
    </>
  )
}

describe("<Modal />", () => {
  it("should open modal on btn click", () => {
    render(<TestComponent />)

    const btnOpenModal = screen.getByTestId("btn-modal")
    fireEvent.click(btnOpenModal)

    expect(screen.getByText("helloworld")).toBeVisible()
  })

  it("should close modal on btn click", () => {
    render(<TestComponent />)

    const btnOpenModal = screen.getByTestId("btn-modal")
    fireEvent.click(btnOpenModal)
    const content = screen.getByText("helloworld")

    const btnInner = screen.getByTestId("btn-inner-modal")
    fireEvent.click(btnInner)

    expect(content).not.toBeVisible()
  })

  it("should close modal on btn X click", () => {
    render(<TestComponent />)

    const btnOpenModal = screen.getByTestId("btn-modal")
    fireEvent.click(btnOpenModal)

    const content = screen.getByText("helloworld")

    const btnX = screen.getByTestId("close-btn")
    fireEvent.click(btnX)

    expect(content).not.toBeVisible()
  })
})
