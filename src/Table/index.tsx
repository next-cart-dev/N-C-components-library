import React from "react"

import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table"

import * as S from "./styles"
import { Props } from "./types"

export function Table<T>({ data, columns }: Props<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <S.Table>
      <S.TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <S.TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <S.TableHeadCell key={header.id}>
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
          <S.TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <S.TableBodyCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </S.TableBodyCell>
            ))}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  )
}
