import { styled } from "../../stitches.config"

export const Table = styled("div", {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  overflow: "auto"
})

export const TableHead = styled("div", {
  display: "grid"
})

export const TableBody = styled("div", {
  display: "grid",
  height: "300px"
})

export const TableRow = styled("div", {
  display: "flex",
  fontSize: "$16",
  color: "$text700",
  width: "100%",
  "@media (min-width: 768px)": {
    fontSize: "$18"
  }
})

export const TableHeadCell = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 $8",
  height: "56px",
  backgroundColor: "$primary200",
  fontWeight: "700",
  color: "$primary500",
  textAlign: "left",
  letterSpacing: "1.2px"
})

export const TableBodyCell = styled("div", {
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 $8",
  textAlign: "left",
  fontWeight: "$normal",
  color: "$primary500",
  letterSpacing: "1.2px",
  backgroundColor: "$neutral300",
  borderBottom: "1px solid $primary300"
})

export const PaginationButton = styled("button", {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$8",
  color: "$text200",
  fontSize: "$16",
  cursor: "pointer",
  transition: "font-weight 0.3s ease-in-out",
  "@media (min-width: 768px)": {
    fontSize: "$18"
  },
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

export const Pagination = styled("div", {
  width: "100%",
  padding: "$16",
  backgroundColor: "$primary500",
  display: "flex",
  alignItems: "center",
  flexFlow: "column",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  "@media (min-width: 768px)": {
    flexFlow: "row",
    justifyContent: "space-between"
  }
})
