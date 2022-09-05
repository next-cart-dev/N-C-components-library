import React from "react"

import ptBR from "date-fns/locale/pt-BR"
import "react-day-picker/dist/style.css"
import { DayModifiers, DayPickerSingleProps } from "react-day-picker"

import { Icon } from "../../Icon"
import * as S from "../styles"

const modifiers: DayModifiers = {
  sunday: (day) => day.getDay() === 0,
  saturday: (day) => day.getDay() === 6
}

const modifiersClassNames: Record<string, string> = {
  sunday: "sunday",
  saturday: "saturday"
}

const IconLeft = () => (
  <Icon name="BsFillCaretLeftFill" size="small" color="$text500" />
)

const IconRight = () => (
  <Icon name="BsFillCaretRightFill" size="small" color="$text500" />
)

const components = {
  IconLeft,
  IconRight
}

export const SingleCalendar = ({
  selected,
  onSelect,
  ...props
}: Omit<DayPickerSingleProps, "mode">) => {
  return (
    <S.Calendar
      {...props}
      mode="single"
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      components={components}
      locale={ptBR}
      selected={selected}
      onSelect={onSelect}
    />
  )
}
