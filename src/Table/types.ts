import { ColumnDef } from "@tanstack/react-table"

export type Props<T> = {
  data: any[]
  columns: ColumnDef<T>[]
}
