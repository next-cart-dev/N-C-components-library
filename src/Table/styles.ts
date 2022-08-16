import { styled } from "../stitches.config"

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
  padding: "14px 30px",
  backgroundColor: "$neutral400",
  fontWeight: "$normal"
})

export const TableBodyCell = styled("td", {
  padding: "14px 30px"
})
