import { Modal } from "."
import { Button } from '../Button'
import React, { useState } from "react";
import * as S from './styles';

export const ModalExample = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Modal open={open} onOpenChange={setOpen} trigger={<Button>Click Me to open the modal</Button>}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <S.DialogTitle>Titulo Do Modal</S.DialogTitle>
                    <S.DialogDescription>Texto para acompanhar modal de exemplo</S.DialogDescription>
                </div>
                <div style={{ display: 'flex', gap: '4rem', marginTop: '30px' }}>
                    <S.ModalButton onClick={() => setOpen(false)} variant='primary'>Button</S.ModalButton>
                    <S.ModalButton onClick={() => setOpen(false)} variant='secondary'>Button</S.ModalButton>
                </div>
            </Modal>
        </>
    )
}