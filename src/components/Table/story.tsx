import React, { useState } from "react"

import { faker } from "@faker-js/faker"
import { createColumnHelper, SortingState } from "@tanstack/react-table"

import { useTablePagination } from "./utils"

import { Table } from "../.."
import { Badge } from "../Badge"

export type Column = {
  column1: string
  column2: string
  column3: string
  column4: string
  column5: string
}

const columnHelper = createColumnHelper<Column>()

export const columnsExample = [
  columnHelper.accessor("column1", {
    header: () => "Nome",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("column2", {
    header: () => "Documento",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("column3", {
    header: () => "Data nasc.",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("column4", {
    header: () => "Status",
    cell: (info) => (
      <Badge variant="info" css={{ width: 100 }}>
        {info.renderValue()}
      </Badge>
    ),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("column5", {
    header: () => "Cidade",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  })
]

export const data = Array.from(Array(3).keys()).map(() => ({
  column1: faker.name.fullName(),
  column2: "455-333-123/20",
  column3: faker.date.birthdate().toDateString(),
  column4: faker.helpers.arrayElement(["Ativo", "Bloqueado"]),
  column5: faker.helpers.arrayElement(["São Paulo", "Rio de Janeiro"])
}))

export const StoryDefault = () => {
  const [sorting, setSorting] = useState<SortingState>([])

  const { pageIndex, setPagination, pageSize } = useTablePagination({
    pageSize: 3,
    pageIndex: 0
  })

  return (
    <Table
      data={data}
      columns={columnsExample}
      sorting={sorting}
      setSorting={setSorting}
      pagination={{
        pageIndex,
        pageSize,
        pageCount: 1,
        itemCount: data.length,
        setPagination
      }}
    />
  )
}
