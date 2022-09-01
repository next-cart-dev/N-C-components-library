import React, { useState } from "react"

import { Box } from "../../Box"
import { Typography } from "../../Typography"

import { SingleCalendar } from "./index"

export const StorySingle = () => {
  const [value, setValue] = useState<Date>()

  return (
    <Box>
      <Typography>Single selection</Typography>
      <SingleCalendar selected={value} onSelect={setValue} />
    </Box>
  )
}

export const StorySingleTwoMonths = () => {
  const [value, setValue] = useState<Date>()

  return (
    <Box>
      <Typography>Single selection with multiple months</Typography>
      <SingleCalendar selected={value} onSelect={setValue} numberOfMonths={2} />
    </Box>
  )
}
