import React, { useState } from "react"

import * as S from "./styles"

import { Button } from "../Button"

import { Modal } from "."

// TODO: Criar componentes para o corpo e ações do modal
// - ModalBody, que já tem a estilização de display: flex e etc, conforme a linha 23
// - ModalActions, também com display flex e etc, conforme a linha 35 (no marginTop, utilizar o token de espaçamento mais próximo de 30px)
// Assim não é necessário definir esses estilos na hora de utilizar o modal

export const ModalExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal
        open={open}
        onOpenChange={setOpen}
        trigger={<Button>Click Me to open the modal</Button>}
      >
        {/* TODO: <ModalBody/> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <S.DialogTitle>Titulo Do Modal</S.DialogTitle>
          <S.DialogDescription>
            Texto para acompanhar modal de exemplo
          </S.DialogDescription>
        </div>
        {/* TODO: <ModalActions/> */}
        <div style={{ display: "flex", gap: "4rem", marginTop: "30px" }}>
          {/* TODO: Não é necessário criar novos botões, o componente a ser utilizado é o Button mesmo */}
          <S.ModalButton onClick={() => setOpen(false)} variant="primary">
            Button
          </S.ModalButton>
          <S.ModalButton onClick={() => setOpen(false)} variant="secondary">
            Button
          </S.ModalButton>
        </div>
      </Modal>
    </>
  )
}
