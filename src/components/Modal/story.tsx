import React, { useState } from "react"

import * as S from "./styles"

import { Button } from "../Button"

import { Modal } from "."

export const ModalExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal
        open={open}
        onOpenChange={setOpen}
        trigger={<Button>Click Me to open the modal</Button>}
      >
        <S.ModalBody>
          <S.DialogTitle>Titulo Do Modal</S.DialogTitle>
          <S.DialogDescription>
            Texto para acompanhar modal de exemplo
          </S.DialogDescription>
        </S.ModalBody>
        <S.ModalActions>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Button
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Button
          </Button>
        </S.ModalActions>
      </Modal>
    </>
  )
}
