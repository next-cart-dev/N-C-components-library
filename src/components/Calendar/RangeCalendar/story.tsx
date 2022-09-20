import React, { useState } from "react"

import { DateRange } from "react-day-picker"

import { RangeSelectionButtonGroup } from "./RangeSelectionButtonGroup"

import { Box } from "../../Box"
import { Typography } from "../../Typography"
import * as S from "../styles"

import { RangeCalendar } from "./index"

export const StoryRange = () => {
  const [value, setValue] = useState<DateRange | undefined>()

  return (
    <Box>
      <Typography>Range selection</Typography>
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
    </Box>
  )
}

export const StoryRangeTwoMonths = () => {
  const [value, setValue] = useState<DateRange | undefined>()

  return (
    <Box>
      <Typography>Range selection with multiple months</Typography>
      <S.RangeCalendarRoot>
        <RangeSelectionButtonGroup
          onClickLastWeek={setValue}
          onClickCurrentMonth={setValue}
          onClickLastMonth={setValue}
          onClickPreviousMonth={setValue}
          onClickReset={setValue}
          selected={value}
        />
        <RangeCalendar
          selected={value}
          onSelect={setValue}
          numberOfMonths={2}
        />
      </S.RangeCalendarRoot>
    </Box>
  )
}
