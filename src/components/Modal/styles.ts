import * as Dialog from "@radix-ui/react-dialog"

import { styled, keyframes } from "../../stitches.config"

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
})

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 }
})

export const ModalOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.44)",
  position: "fixed",
  inset: 0,
  zIndex: "2",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

export const ModalContent = styled(Dialog.Content, {
  backgroundColor: "$background100",
  height: "100vh",
  width: "100vw",
  border: "1px solid $background500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "3",
  flexDirection: "column",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "$24",
  borderRadius: "4px",
  "@media (min-width: 768px)": {
    height: "fit-content",
    width: "650px"
  }
})

export const CloseIcon = styled("button", {
  all: "unset",
  cursor: "pointer",
  fontSize: "$22"
})

export const ModalHeader = styled("div", {
  marginBottom: "$32",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
})

export const ModalBody = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginBottom: "$32",
  width: "100%"
})

export const ModalActions = styled("div", {
  display: "flex",
  marginTop: "auto",
  justifyContent: "right",
  gap: "$16",
  width: "100%"
})
