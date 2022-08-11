import React from "react"
import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';
import { Props } from "./types";


function Content({ children, ...props }: any) {
    return (
        <Dialog.Portal>
            <S.StyledOverlay />
            <S.DialogContent {...props}>{children}</S.DialogContent>
        </Dialog.Portal>
    );
}
const DialogContent = Content

export const Modal = ({ trigger, children, open, setOpen }: Props) => {
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild children={trigger} />
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog.Root>
    )
}