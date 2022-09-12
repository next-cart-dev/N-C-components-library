import React, { useState } from "react"

import { endOfMonth, format, startOfMonth, subDays } from "date-fns"
import { DateRange } from "react-day-picker"

import { Box } from "../../Box"
import { Typography } from "../../Typography"
import * as S from "../styles"

type Props = {
  onClickLastWeek: (date: DateRange) => void
  onClickLastMonth: (date: DateRange) => void
  onClickCurrentMonth: (date: DateRange) => void
  onClickPreviousMonth: (date: DateRange) => void
  onClickReset: (date: undefined) => void
  selected: DateRange | undefined
}

type State =
  | "LAST_WEEK"
  | "LAST_30_DAYS"
  | "CURRENT_MONTH"
  | "PREVIOUS_MONTH"
  | "RESET"
  | undefined

export const RangeSelectionButtonGroup = ({
  onClickLastWeek,
  onClickLastMonth,
  onClickCurrentMonth,
  onClickPreviousMonth,
  onClickReset,
  selected
}: Props) => {
  const [active, setActive] = useState<State>()
  const now = new Date()
  let startRange
  let endRange

  if (selected?.from && selected?.to) {
    startRange = format(selected.from, "dd/MM/yyyy")
    endRange = format(selected.to, "dd/MM/yyyy")
  }

  const handleLastWeek = () => {
    setActive("LAST_WEEK")
    onClickLastWeek({ from: subDays(now, 7), to: now })
  }

  const handleLast30Days = () => {
    setActive("LAST_30_DAYS")
    onClickLastMonth({ from: subDays(now, 30), to: now })
  }

  const handleCurrentMonth = () => {
    setActive("CURRENT_MONTH")
    onClickCurrentMonth({
      from: startOfMonth(now),
      to: endOfMonth(now)
    })
  }

  const handlePreviousMonth = () => {
    const lastDayFromPreviousMonth = subDays(startOfMonth(now), 1)
    const firstDayFromPreviousMonth = startOfMonth(lastDayFromPreviousMonth)

    setActive("PREVIOUS_MONTH")
    onClickPreviousMonth({
      from: firstDayFromPreviousMonth,
      to: lastDayFromPreviousMonth
    })
  }

  const handleResetRange = () => {
    setActive("RESET")
    onClickReset(undefined)
  }

  return (
    <Box css={{ width: "130px" }}>
      <Box css={{ marginBottom: "$16", marginTop: "20px" }}>
        <S.RangeSelectionButton
          data-state={active === "LAST_WEEK" && "active"}
          type="button"
          onClick={handleLastWeek}
        >
          Últimos 7 dias
        </S.RangeSelectionButton>
        <S.RangeSelectionButton
          data-state={active === "LAST_30_DAYS" && "active"}
          type="button"
          onClick={handleLast30Days}
        >
          Últimos 30 dias
        </S.RangeSelectionButton>
        <S.RangeSelectionButton
          data-state={active === "CURRENT_MONTH" && "active"}
          type="button"
          onClick={handleCurrentMonth}
        >
          Este mês
        </S.RangeSelectionButton>
        <S.RangeSelectionButton
          data-state={active === "PREVIOUS_MONTH" && "active"}
          type="button"
          onClick={handlePreviousMonth}
        >
          Mês passado
        </S.RangeSelectionButton>
        <S.RangeSelectionButton
          data-state={active === "RESET" && "active"}
          type="button"
          onClick={handleResetRange}
        >
          Limpar seleção
        </S.RangeSelectionButton>
      </Box>
      {startRange && endRange && (
        <Box css={{ paddingLeft: "$8" }}>
          <Typography variant="body3" css={{ color: "$text400" }}>
            {startRange} a {endRange}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
