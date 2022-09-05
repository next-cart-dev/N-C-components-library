import { DayPicker } from "react-day-picker"

import { styled } from "../../stitches.config"

export const Calendar = styled(DayPicker, {
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
  ".rdp-button:hover:not([disabled])": {
    backgroundColor: "$primary200",
    borderRadius: "8px",
    color: "$primary500"
  },
  ".rdp-day_selected:not([disabled]), .c-coPatf .rdp-day_selected:focus:not([disabled]), .c-coPatf .rdp-day_selected:active:not([disabled]), .c-coPatf .rdp-day_selected:hover:not([disabled])":
    {
      color: "$text200 !important"
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
