import React from "react"

import * as Dialog from "@radix-ui/react-dialog"

import * as S from "./styles"
import { Props } from "./types"

function Content({ children, ...props }: any) {
  return (
    <Dialog.Portal>
      <S.StyledOverlay />
      <S.DialogContent {...props}>{children}</S.DialogContent>
    </Dialog.Portal>
  )
}
const DialogContent = Content

export const Modal = ({ trigger, children, open, onOpenChange }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {/* TODO: Ajustar erro de tipagem, children deve ser passado no miolo do componente e não como props */}
      <Dialog.Trigger asChild children={trigger} />
      <DialogContent>{children}</DialogContent>
    </Dialog.Root>
  )
}
