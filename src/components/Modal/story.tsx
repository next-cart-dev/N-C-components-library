import React, { useState } from "react"

import { Box } from "../Box"
import { Breadcrumbs } from "../Breadcrumbs"
import { Button } from "../Button"
import { Typography } from "../Typography"

import { Modal } from "."

export const StoryModalTitle = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal com título</Button>
      <Modal.Root id="modal-1" open={open} onOpenChange={setOpen}>
        <Modal.Header>Título</Modal.Header>
        <Modal.Body>
          <Typography>
            Pellentesque nulla lacus, dignissim quis orci at, maximus elementum
            quam. Praesent in imperdiet quam, vel tincidunt nisi. Suspendisse eu
            purus mi. Aenean ultrices nibh ac justo viverra, ac ultricies ipsum
            porta.
          </Typography>
        </Modal.Body>
        <Modal.Actions>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Confirmar
          </Button>
        </Modal.Actions>
      </Modal.Root>
    </>
  )
}

export const StoryModalWithoutTitle = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box css={{ marginTop: "$8" }}>
      <Button onClick={() => setOpen(true)}>Abrir modal sem título</Button>
      <Modal.Root id="modal-2" open={open} onOpenChange={setOpen}>
        <Modal.Body>
          <Typography>
            Pellentesque nulla lacus, dignissim quis orci at, maximus elementum
            quam. Praesent in imperdiet quam, vel tincidunt nisi. Suspendisse eu
            purus mi. Aenean ultrices nibh ac justo viverra, ac ultricies ipsum
            porta.
          </Typography>
        </Modal.Body>
        <Modal.Actions>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Fechar
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Confirmar
          </Button>
        </Modal.Actions>
      </Modal.Root>
    </Box>
  )
}

export const StoryModalCustomTitle = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box css={{ marginTop: "$8" }}>
      <Button onClick={() => setOpen(true)}>
        Abrir modal com título personalizado
      </Button>
      <Modal.Root
        id="modal-3"
        open={open}
        onOpenChange={setOpen}
        css={{
          "@media(min-width: 768px)": { width: "650px" }
        }}
      >
        <Modal.Header>
          <Breadcrumbs
            steps={["Certidão", "332.35", "01 - Instrumento Particular"]}
          />
        </Modal.Header>
        <Modal.Body>
          <Typography>
            Pellentesque nulla lacus, dignissim quis orci at, maximus elementum
            quam. Praesent in imperdiet quam, vel tincidunt nisi. Suspendisse eu
            purus mi. Aenean ultrices nibh ac justo viverra, ac ultricies ipsum
            porta.
          </Typography>
        </Modal.Body>
        <Modal.Actions>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Confirmar
          </Button>
        </Modal.Actions>
      </Modal.Root>
    </Box>
  )
}
