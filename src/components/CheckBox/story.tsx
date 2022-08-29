import React, { useState } from "react"

import type { CheckedState } from "@radix-ui/react-checkbox"

import { Box } from "../Box"

import { Checkbox } from "."

export const StoryCheckboxTwoState = () => {
  const [checked, setChecked] = useState<CheckedState>(true)

  return (
    <Box css={{ marginBottom: "$16" }}>
      <Checkbox
        id="checkbox-story-1"
        label="Checkbox two-state"
        checked={checked}
        onCheckedChange={() => setChecked((prevState) => !prevState)}
      />
    </Box>
  )
}

export const StoryCheckboxTriState = () => {
  const [checked, setChecked] = useState<CheckedState>("indeterminate")

  const onCheckedChange = () =>
    setChecked((prevIsChecked) =>
      prevIsChecked === "indeterminate" ? false : "indeterminate"
    )

  return (
    <Box css={{ marginBottom: "$16" }}>
      <Checkbox
        id="checkbox-story-2"
        label="Checkbox tri-state"
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </Box>
  )
}

export const StoryCheckboxDisabled = () => {
  return <Checkbox id="checkbox-story-3" label="Checkbox disabled" disabled />
}
