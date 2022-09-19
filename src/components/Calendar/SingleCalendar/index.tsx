import React from "react"

import ptBR from "date-fns/locale/pt-BR"
import "react-day-picker/dist/style.css"
import { DayModifiers, DayPickerSingleProps } from "react-day-picker"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs"

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
  <Icon size="small" icon={<BsFillCaretLeftFill />} color="$text500" />
)

const IconRight = () => (
  <Icon size="small" icon={<BsFillCaretRightFill />} color="$text500" />
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
