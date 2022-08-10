import React from "react"
import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';

export const Modal = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild={true} />
            <Dialog.Portal forceMount={true}>
                <S.DialogContent>
                    <S.DialogTitle>
                        Titulo do Modal
                    </S.DialogTitle>
                    <S.DialogDescription>
                        Texto para acompanhar modal de exemplo
                    </S.DialogDescription>
                    <S.ContainerDialogsClose>
                        <S.DialogClose variant={'primary'}>
                            button
                        </S.DialogClose>
                        <S.DialogClose variant={'secondary'}>
                            button
                        </S.DialogClose>
                    </S.ContainerDialogsClose>
                </S.DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}