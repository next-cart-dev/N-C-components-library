import React, { useState } from "react"

import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import { Modal } from "."

const TestComponent = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
      <Modal.Root id="modal-1" open={open} onOpenChange={setOpen}>
        <Modal.Header>Título</Modal.Header>
        <Modal.Body>Descrição modal</Modal.Body>
        <Modal.Actions>
          <button onClick={() => setOpen(false)}>Fechar</button>
        </Modal.Actions>
      </Modal.Root>
    </>
  )
}

describe("<Modal />", () => {
  it("should open modal on btn click", async () => {
    render(<TestComponent />)

    const buttonOpenModal = await screen.findByText("Abrir modal")

    fireEvent.click(buttonOpenModal)

    expect(await screen.findByText("Descrição modal")).toBeVisible()
  })

  it("should close modal on btn click", async () => {
    render(<TestComponent />)

    const buttonOpenModal = await screen.findByText("Abrir modal")
    fireEvent.click(buttonOpenModal)

    const buttonInner = await screen.findByText("Fechar")

    fireEvent.click(buttonInner)

    await waitFor(() => {})
    const content = screen.queryByText("Descrição modal")

    expect(content).not.toBeInTheDocument()
  })

  it("should close modal on btn X click", async () => {
    render(<TestComponent />)

    const buttonOpenModal = await screen.findByText("Abrir modal")
    fireEvent.click(buttonOpenModal)

    const buttonCloseIcon = await screen.findByTestId("modal-close-icon")
    fireEvent.click(buttonCloseIcon)

    await waitFor(() => {})

    const content = screen.queryByText("Descrição modal")

    expect(content).not.toBeInTheDocument()
  })
})
