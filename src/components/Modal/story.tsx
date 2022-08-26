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
        triggerElementRef={<Button>Click Me to open the modal</Button>}
        title="Título do modal"
      >
        <S.ModalBody>
          <S.DialogDescription css={{ width: "500px" }}>
            Pellentesque nulla lacus, dignissim quis orci at, maximus elementum
            quam. Praesent in imperdiet quam, vel tincidunt nisi. Suspendisse eu
            purus mi. Aenean ultrices nibh ac justo viverra, ac ultricies ipsum
            porta.
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
