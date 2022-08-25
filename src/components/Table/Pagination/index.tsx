import React from "react"

import { Table } from "@tanstack/react-table"

import { Box } from "../../Box"
import { Typography } from "../../Typography"
import * as S from "../styles"

type Props = {
  table: Table<any>
  totalCount: number
}

export const TablePagination = ({ table, totalCount }: Props) => {
  const currentPage = table.getState().pagination.pageIndex + 1

  const CountView = () => {
    const paginatedCount = `${table.getPaginationRowModel().rows[0].index + 1} -
    ${
      table.getPaginationRowModel().rows[
        table.getPaginationRowModel().rows.length - 1
      ].index + 1
    }`

    return (
      <Typography
        css={{ letterSpacing: "1.2px", fontSize: "$18", color: "$text200" }}
      >
        Resultado: {paginatedCount} de {totalCount}
      </Typography>
    )
  }

  return (
    <Box
      css={{
        padding: "$16",
        backgroundColor: "$primary500",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <CountView />
      <Box>
        <S.PaginationButton
          type="button"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </S.PaginationButton>
        {Array.from(Array(table.getPageCount()).keys()).map((page) => (
          <S.PaginationButton
            key={page}
            onClick={() => table.setPageIndex(page)}
            variant={currentPage === page + 1 ? "active" : undefined}
          >
            {page + 1}
          </S.PaginationButton>
        ))}
        <S.PaginationButton
          type="button"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </S.PaginationButton>
      </Box>
    </Box>
  )
}
