import React from "react"

import { Table } from "@tanstack/react-table"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs"
import { v4 as uuid } from "uuid"

import { usePaginationRange } from "./usePaginationRange"

import { Box } from "../../Box"
import { Icon } from "../../Icon"
import * as S from "../styles"

type Props = {
  table: Table<any>
}

export const TablePagination = ({ table }: Props) => {
  const { items, currentPage } = usePaginationRange({
    currentPage: table.getState().pagination.pageIndex,
    totalPages: table.getPageCount()
  })

  console.log(items)
  const ButtonHandler = ({ page }: { page: string | number }) => {
    if (typeof page === "number") {
      const onClick = () => {
        table.setPageIndex(page - 1)
      }

      return (
        <S.PaginationButton
          onClick={onClick}
          type="button"
          variant={currentPage + 1 === page ? "active" : undefined}
        >
          {page}
        </S.PaginationButton>
      )
    }

    return <S.PaginationEllipsis>{page}</S.PaginationEllipsis>
  }

  return (
    <S.Pagination>
      <Box css={{ display: "flex", flexFlow: "row", alignItems: "center" }}>
        <S.PaginationButton
          type="button"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <Icon size="medium" icon={<BsFillCaretLeftFill />} />
        </S.PaginationButton>
        {items.map((page) => (
          <ButtonHandler key={uuid()} page={page} />
        ))}
        <S.PaginationButton
          type="button"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <Icon size="medium" icon={<BsFillCaretRightFill />} />
        </S.PaginationButton>
      </Box>
    </S.Pagination>
  )
}
