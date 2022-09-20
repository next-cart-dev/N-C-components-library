import React, { useState } from "react"

import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { DateRange } from "react-day-picker"

import { RangeCalendar } from "./RangeCalendar"
import { RangeSelectionButtonGroup } from "./RangeCalendar/RangeSelectionButtonGroup"
import * as S from "./styles"

describe("<RangeCalendar />", () => {
  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date(2022, 5, 1))
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  const setup = () => {
    const Component = () => {
      const [value, setValue] = useState<DateRange>()

      return (
        <S.RangeCalendarRoot>
          <RangeSelectionButtonGroup
            onClickLastWeek={setValue}
            onClickCurrentMonth={setValue}
            onClickLastMonth={setValue}
            onClickPreviousMonth={setValue}
            onClickReset={setValue}
            selected={value}
          />
          <RangeCalendar selected={value} onSelect={setValue} />
        </S.RangeCalendarRoot>
      )
    }

    render(<Component />)
  }

  it("should select a range properly", async () => {
    setup()

    const startRange = await screen.findByText("1")
    const endRange = await screen.findByText("15")

    fireEvent.click(startRange)
    fireEvent.click(endRange)

    await waitFor(async () => {})

    const datePreview = await screen.findByText("01/06/2022 a 15/06/2022")
    expect(datePreview).toBeVisible()
  })

  it("should select the last thirty days", async () => {
    setup()

    const lastSevenDays = await screen.findByText("Últimos 7 dias")

    fireEvent.click(lastSevenDays)

    await waitFor(async () => {})

    const datePreview = await screen.findByText("25/05/2022 a 01/06/2022")
    expect(datePreview).toBeVisible()
  })

  it("should select the last thirty days", async () => {
    setup()

    const lastThirthyDays = await screen.findByText("Últimos 30 dias")

    fireEvent.click(lastThirthyDays)

    await waitFor(async () => {})

    const datePreview = await screen.findByText("02/05/2022 a 01/06/2022")
    expect(datePreview).toBeVisible()
  })

  it("should select the current month", async () => {
    setup()

    const currentMonth = await screen.findByText("Este mês")

    fireEvent.click(currentMonth)

    await waitFor(async () => {})

    const datePreview = await screen.findByText("01/06/2022 a 30/06/2022")
    expect(datePreview).toBeVisible()
  })

  it("should select the previous month", async () => {
    setup()

    const previousMonth = await screen.findByText("Mês passado")

    fireEvent.click(previousMonth)

    await waitFor(async () => {})

    const datePreview = await screen.findByText("01/05/2022 a 31/05/2022")
    expect(datePreview).toBeVisible()
  })
})
