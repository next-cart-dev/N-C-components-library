import { OnChangeFn, PaginationState } from "@tanstack/react-table"

export type Props = {
  data: any[]
  columns: any[]
  pagination: {
    /**
     * Total items by page
     */
    pageSize: number
    /**
     * The index of the page
     */
    pageIndex: number
    /**
     * Total pages of the table
     */
    pageCount: number
    /**
     * Total items of the table
     */
    itemCount: number
    setPagination: OnChangeFn<PaginationState>
  }
}
