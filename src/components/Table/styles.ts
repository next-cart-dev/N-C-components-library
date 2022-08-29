import { styled } from "../../stitches.config"

export const Table = styled("table", {
  width: "100%"
})

export const TableHead = styled("thead", {})

export const TableBody = styled("tbody", {})

export const TableRow = styled("tr", {
  fontSize: "$16",
  color: "$text700"
})

export const TableHeadCell = styled("th", {
  padding: "20.5px 16px",
  backgroundColor: "$primary500",
  fontWeight: "700",
  color: "$text200",
  fontSize: "$18",
  textAlign: "left",
  letterSpacing: "1.2px"
})

export const TableBodyCell = styled("td", {
  padding: "13px 16px",
  textAlign: "left",
  fontWeight: "$normal",
  fontSize: "$18",
  color: "$primary500",
  letterSpacing: "1.2px",
  backgroundColor: "$neutral300",
  border: "1px solid $primary300"
})

export const PaginationButton = styled("button", {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$8 10px",
  color: "$text200",
  cursor: "pointer",
  transition: "font-weight 0.3s ease-in-out",
  variants: {
    variant: {
      active: {
        fontWeight: "$semibold"
      }
    }
  },
  "&:hover": {
    fontWeight: "$semibold"
  },
  "&:disabled": {
    opacity: "0.3"
  }
})
