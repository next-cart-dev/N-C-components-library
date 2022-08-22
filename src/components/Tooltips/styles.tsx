import ReactTooltip from "react-tooltip"

import { styled } from "../../stitches.config"

export const ReactTooltipStyled = styled(ReactTooltip, {
  /**
   * can use !important to overwrite react-tooltip's default class
   */
  backgroundColor: "$primary300 !important",
  color: "$primary500 !important",
  fontSize: "$14 !important",
  padding: "$8 !important",
  letterSpacing: "1.2px !important",
  "&.place-left::after": {
    borderLeft: "8px solid $primary300 !important"
  },
  "&.place-right::after": {
    borderRight: "8px solid $primary300 !important"
  },
  "&.place-top::after": {
    borderTop: "8px solid $primary300 !important"
  },
  "&.place-bottom::after": {
    borderBottom: "8px solid $primary300 !important"
  }
})
