import React from "react"

import { Box } from "../Box"

import { Tabs } from "./index"

export const StoryDefault = () => {
  return (
    <Box css={{ width: "300px" }}>
      <Tabs.Root defaultValue="tab1">
        <Tabs.List aria-label="Tabs">
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Tab 1 content</Tabs.Content>
        <Tabs.Content value="tab2">Tab 2 content</Tabs.Content>
        <Tabs.Content value="tab3">Tab 3 content</Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}
