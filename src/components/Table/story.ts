import { createColumnHelper } from "@tanstack/react-table"

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
    header: () => "Coluna 1",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("column2", {
    header: () => "Coluna 2",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("column3", {
    header: () => "Coluna 3",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("column4", {
    header: () => "Coluna 4",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("column5", {
    header: () => "Coluna 5",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  })
]

export const data = Array.from(Array(50).keys()).map((item) => ({
  column1: "Nome completo",
  column2: "Idade",
  column3: "Texto exemplo",
  column4: "Texto",
  column5: "Status"
}))
