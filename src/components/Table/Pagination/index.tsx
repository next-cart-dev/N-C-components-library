import React from "react"

import { Table } from "@tanstack/react-table"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs"

import { Box } from "../../Box"
import { Icon } from "../../Icon"
// import { Typography } from "../../Typography"
import * as S from "../styles"

type Props = {
  table: Table<any>
  totalCount: number
}

export const TablePagination = ({ table, totalCount }: Props) => {
  const pageIndex = table.getState().pagination.pageIndex
  const currentPage = pageIndex + 1

  console.log(table.getPaginationRowModel())
  console.log(pageIndex)
  // const CountView = () => {
  //   const paginatedCount = `${table.getPaginationRowModel().rows[0].index + 1} -
  //   ${
  //     table.getPaginationRowModel().rows[
  //       table.getPaginationRowModel().rows.length - 1
  //     ].index + 1
  //   }`

  //   return (
  //     <Typography
  //       css={{
  //         letterSpacing: "1.2px",
  //         fontSize: "$16",
  //         color: "$text200",
  //         marginBottom: "$16",
  //         "@media (min-width: 768px)": {
  //           marginBottom: "0",
  //           fontSize: "$18"
  //         }
  //       }}
  //     >
  //       Resultado: {paginatedCount} de {totalCount}
  //     </Typography>
  //   )
  // }

  return (
    <S.Pagination>
      {/* <CountView /> */}
      <Box css={{ display: "flex", flexFlow: "row" }}>
        <S.PaginationButton
          type="button"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <Icon
            size="medium"
            icon={<BsFillCaretLeftFill />}
            css={{ color: "$text200" }}
          />
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
          <Icon
            size="medium"
            icon={<BsFillCaretRightFill />}
            css={{ color: "$text200" }}
          />
        </S.PaginationButton>
      </Box>
    </S.Pagination>
  )
}
