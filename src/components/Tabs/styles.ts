import * as Tabs from "@radix-ui/react-tabs"

import { styled } from "../../stitches.config"

export const TabsRoot = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column"
})

export const TabsList = styled(Tabs.List, {
  flexShrink: 0,
  display: "flex"
})

export const TabsTrigger = styled(Tabs.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "$primary200",
  padding: "0 $16",
  height: "48px",
  fontSize: "$18",
  color: "$primary500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer !important",
  flex: "1",
  userSelect: "none",
  borderRight: "1px solid $primary500",
  borderTop: "1px solid $primary500",
  borderBottom: "1px solid $primary500",
  fontWeight: "500",
  "&:first-child": {
    border: "1px solid $primary500",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px"
  },
  "&:last-child": {
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px"
  },
  "&:hover": { color: "$primary500" },
  '&[data-state="active"]': {
    color: "$text200",
    backgroundColor: "$primary500"
  },
  "&:focus": { position: "relative" }
})

export const TabsContent = styled(Tabs.Content, {
  padding: "$8"
})
