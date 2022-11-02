import { OnChangeFn, PaginationState } from "@tanstack/react-table"

export type Props = {
  data: any[]
  columns: any[]
  pagination: {
    pageSize: number
    pageIndex: number
    pageCount: number
    itemCount: number
    setPagination: OnChangeFn<PaginationState>
  }
}
