import React from "react"

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from "@tanstack/react-table"

import { TablePagination } from "./Pagination"
import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"

export function Table({ data, columns }: Props) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <Box>
      <S.Table cellPadding={0} cellSpacing={0}>
        <S.TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <S.TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <S.TableHeadCell
                  key={header.id}
                  css={{
                    ...(header.index === 0 && { borderTopLeftRadius: "4px" }),
                    ...(header.index === headerGroup.headers.length - 1 && {
                      borderTopRightRadius: "4px"
                    })
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </S.TableHeadCell>
              ))}
            </S.TableRow>
          ))}
        </S.TableHead>
        <S.TableBody>
          {table.getRowModel().rows.map((row) => (
            <S.TableRow key={row.id} data-testid={`table-row-${row.id}`}>
              {row.getVisibleCells().map((cell) => (
                <S.TableBodyCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </S.TableBodyCell>
              ))}
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
      <TablePagination table={table} totalCount={data.length} />
    </Box>
  )
}
