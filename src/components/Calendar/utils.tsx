import React from "react"

import { DayModifiers } from "react-day-picker"

import { Icon } from "../Icon"

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

export { modifiers, modifiersClassNames, components }
