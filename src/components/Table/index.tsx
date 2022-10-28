import React, { useState } from "react"

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from "@tanstack/react-table"
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"

import { TablePagination } from "./Pagination"
import * as S from "./styles"
import { Props } from "./types"

import { Box } from "../Box"
import { Icon } from "../Icon"

export function Table({ data, columns, pageSize = 10 }: Props) {
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    initialState: { pagination: { pageSize } },
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <Box>
      <S.Table>
        <S.TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <S.TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <S.TableHeadCell
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  css={{
                    ...(header.index === 0 && { borderTopLeftRadius: "4px" }),
                    ...(header.index === headerGroup.headers.length - 1 && {
                      borderTopRightRadius: "4px"
                    }),
                    ...(header.column.getCanSort() && {
                      cursor: "pointer",
                      userSelect: "none"
                    }),
                    minWidth: header.getSize(),
                    maxWidth: "100%"
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: (
                          <Box
                            css={{
                              marginLeft: "$8",
                              display: "flex",
                              alignItems: "center"
                            }}
                          >
                            <Icon
                              icon={<BsCaretUpFill />}
                              size="medium"
                              css={{ color: "$secondary500" }}
                            />
                          </Box>
                        ),
                        desc: (
                          <Box
                            css={{
                              marginLeft: "$8",
                              display: "flex",
                              alignItems: "center"
                            }}
                          >
                            <Icon
                              icon={<BsCaretDownFill />}
                              size="medium"
                              css={{ color: "$secondary500" }}
                            />
                          </Box>
                        )
                      }[header.column.getIsSorted() as string] ?? null}
                    </>
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
                <S.TableBodyCell
                  key={cell.id}
                  css={{
                    minWidth: cell.column.getSize(),
                    maxWidth: "100%"
                  }}
                >
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
