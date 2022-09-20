import React from "react"

import * as Dialog from "@radix-ui/react-dialog"

import { Props } from "./types"

import { Typography } from "../../Typography"
import * as S from "../styles"

export const ModalHeader = ({ children, css }: Props) => {
  let component

  if (typeof children === "string" || Array.isArray(children)) {
    component = <Typography variant="h2">{children}</Typography>
  } else component = children

  return (
    <S.ModalHeader css={css}>
      {component}
      <Dialog.Close asChild data-testid="modal-close-icon">
        <S.CloseIcon />
      </Dialog.Close>
    </S.ModalHeader>
  )
}
