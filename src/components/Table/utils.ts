import { useState } from "react"

import { PaginationState } from "@tanstack/react-table"

type Params = {
  pageSize: number
  pageIndex: number
}

export const useTablePagination = ({ pageSize, pageIndex }: Params) => {
  const [
    { pageIndex: internalPageIndex, pageSize: internalPageSize },
    setPagination
  ] = useState<PaginationState>({
    pageIndex,
    pageSize
  })

  return {
    pageIndex: internalPageIndex,
    pageSize: internalPageSize,
    setPagination
  }
}
