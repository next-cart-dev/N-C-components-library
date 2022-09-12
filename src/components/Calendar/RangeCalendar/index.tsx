import React from "react"

import ptBR from "date-fns/locale/pt-BR"
import { DayPickerRangeProps } from "react-day-picker"

import * as S from "../styles"
import { components, modifiers, modifiersClassNames } from "../utils"

export const RangeCalendar = ({
  selected,
  onSelect,
  ...props
}: Omit<DayPickerRangeProps, "mode">) => {
  return (
    <S.Calendar
      {...props}
      mode="range"
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      components={components}
      locale={ptBR}
      selected={selected}
      onSelect={onSelect}
    />
  )
}
