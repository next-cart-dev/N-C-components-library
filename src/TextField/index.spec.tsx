import React from "react"

import { render, screen } from "@testing-library/react"

import { TextField } from "."

describe("<TextField />", () => {
  it("should render the input with the correct type", async () => {
    render(
      <div>
        <TextField id="email" label="E-mail" type="email" />
        <TextField id="pwd" label="Senha" type="password" />
        <TextField id="name" label="Nome" type="text" />
      </div>
    )

    const emailInput = await screen.findByLabelText("E-mail")
    const pwdInput = await screen.findByLabelText("Senha")
    const textInput = await screen.findByLabelText("Nome")

    expect(emailInput).toHaveAttribute("type", "email")
    expect(pwdInput).toHaveAttribute("type", "password")
    expect(textInput).toHaveAttribute("type", "text")
  })

  it("should display the error message correctly", async () => {
    render(
      <TextField
        id="pwd"
        label="Senha"
        type="password"
        error="Senha inválida"
      />
    )

    const feedbackMessage = await screen.findByText("Senha inválida")

    expect(feedbackMessage).toBeVisible()
  })
})
