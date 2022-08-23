import React from "react"

import * as Dialog from "@radix-ui/react-dialog"
import { DialogContentProps } from "@radix-ui/react-dialog"

import * as S from "./styles"
import { Props } from "./types"

function Content({ children, ...props }: DialogContentProps) {
  return (
    <Dialog.Portal>
      <S.StyledOverlay />
      <S.DialogContent {...props}>{children}</S.DialogContent>
    </Dialog.Portal>
  )
}
const DialogContent = Content

export const Modal = ({
  trigger,
  children,
  open,
  onOpenChange,
  title
}: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <DialogContent>
        <S.CloseContent>
          <span>{title}</span>
          <Dialog.Close asChild data-testid="close-btn">
            <S.IoCloseIcon />
          </Dialog.Close>
        </S.CloseContent>
        {children}
      </DialogContent>
    </Dialog.Root>
  )
}
