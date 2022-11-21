import React from "react"

import * as S from "../../styles"
import { Props as PaginationProps } from "../../types"

type Pagination = {
  pagination: Omit<PaginationProps["pagination"], "setPagination">
}

export const CounterItems: React.FC<Pagination> = ({ pagination }) => {
  const haveRest = pagination.itemCount % pagination.pageSize !== 0
  const isLastPage = pagination.pageIndex === pagination.pageCount - 1

  return (
    <S.CounterItems>
      Resultado: &nbsp;
      {(pagination.pageSize, pagination.itemCount) === 0
        ? pagination.pageIndex * pagination.pageSize
        : pagination.pageIndex * pagination.pageSize + 1}
      &nbsp; - &nbsp;
      {haveRest && isLastPage
        ? pagination.itemCount
        : (pagination.pageIndex + 1) * pagination.pageSize}
      &nbsp; de &nbsp;
      {pagination.itemCount}
    </S.CounterItems>
  )
}
