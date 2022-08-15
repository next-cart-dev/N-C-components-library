import React from "react"

import * as Dialog from "@radix-ui/react-dialog"
import { DialogContentProps } from "@radix-ui/react-dialog"

import * as S from "./styles"
import { Props } from "./types"
import { Box } from "../Box"

function Content({ children, ...props }: DialogContentProps) {
  return (
    <Dialog.Portal>
      <S.StyledOverlay />
      <S.DialogContent {...props}>{children}</S.DialogContent>
    </Dialog.Portal>
  )
}
const DialogContent = Content

export const Modal = ({ trigger, children, open, onOpenChange, title }: Props) => {
  const styleBox = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '4px 10px'
  }
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <DialogContent>
        <Box style={styleBox}>
          <span>{title}</span>
          <Dialog.Close asChild>
            <S.IoCloseIcon />
          </Dialog.Close>
        </Box>
        {children}
      </DialogContent>
    </Dialog.Root>
  )
}
