import React from "react"

import { DayModifiers } from "react-day-picker"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs"

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
  <Icon
    icon={<BsFillCaretLeftFill />}
    size="small"
    css={{ color: "$text500" }}
  />
)

const IconRight = () => (
  <Icon
    icon={<BsFillCaretRightFill />}
    size="small"
    css={{ color: "$text500" }}
  />
)

const components = {
  IconLeft,
  IconRight
}

export { modifiers, modifiersClassNames, components }
