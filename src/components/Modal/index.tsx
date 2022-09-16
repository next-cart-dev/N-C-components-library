import React from "react"

import * as Dialog from "@radix-ui/react-dialog"

import { ModalHeader } from "./Header"
import * as S from "./styles"
import { Props } from "./types"

const ModalRoot = ({ children, open, onOpenChange, ...props }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <S.ModalOverlay />
        <S.ModalContent {...props}>{children}</S.ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export const Modal = {
  Root: ModalRoot,
  Body: S.ModalBody,
  Actions: S.ModalActions,
  Header: ModalHeader
}
