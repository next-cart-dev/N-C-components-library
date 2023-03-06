import { DayPicker } from "react-day-picker"

import { styled } from "../../stitches.config"

export const Calendar = styled(DayPicker, {
  ".rdp-month": {
    backgroundColor: "#fff"
  },
  ".rdp-caption_label": {
    fontWeight: "400",
    fontSize: "$14",
    color: "$text700",
    textTransform: "capitalize"
  },
  ".rdp-head_cell": {
    textTransform: "capitalize",
    fontSize: "$12",
    fontWeight: "400"
  },
  ".rdp-day": {
    fontSize: "$14",
    color: "$neutral700",
    height: "32px",
    width: "32px",
    "&.sunday": {
      color: "$danger500"
    },
    "&.saturday": {
      color: "$danger500"
    },
    "&_today": { color: "$primary500" }
  },
  ".rdp-cell": {
    height: "32px",
    width: "32px"
  },
  ".rdp-button:hover": {
    backgroundColor: "$primary500 !important",
    color: "$text200",
    outline: "none",
    borderRadius: "8px"
  },
  ".rdp-day_selected": {
    color: "$text200",
    "&.saturday": {
      color: "$text200"
    },
    "&.sunday": {
      color: "$text200"
    }
  },
  ".rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled])":
    {
      backgroundColor: "$primary500",
      outline: "none",
      borderRadius: "8px"
    },
  ".rdp-button:focus-visible:not([disabled]), .rdp-button:active:not([disabled])":
    {
      backgroundColor: "transparent",
      border: "none",
      color: "$primary400"
    },
  ".rdp-day_range_middle": {
    backgroundColor: "$primary200 !important",
    borderRadius: "0px !important",
    color: "$primary500 !important"
  }
})

export const RangeSelectionButton = styled("button", {
  all: "unset",
  padding: "$8",
  fontSize: "$14",
  color: "$text400",
  cursor: "pointer",
  width: "90%",
  "&:hover": {
    backgroundColor: "$neutral500",
    color: "$primary500",
    borderRight: "2px solid $primary500"
  },
  '&[data-state="active"]': {
    backgroundColor: "$neutral500",
    color: "$primary500",
    borderRight: "2px solid $primary500"
  }
})

export const RangeCalendarRoot = styled("div", {
  display: "flex"
})
