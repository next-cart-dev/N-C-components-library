import React from "react"

import * as S from "../../styles"
import { Props as PaginationProps } from "../../types"

interface Props {
  pagination: Partial<PaginationProps>
}

export const CounterItems: React.FC<any> = ({ pagination }) => {
  const haveRest = pagination.itemCount % pagination.pageSize !== 0
  const isLastPage = pagination.pageIndex === pagination.pageCount - 1

  return (
    <S.CounterItems>
      {haveRest && isLastPage ? (
        <>
          Resultado: &nbsp;
          {pagination.pageIndex === 0
            ? pagination.itemCount -
              (pagination.itemCount % pagination.pageSize)
            : pagination.pageIndex * pagination.pageSize + 1}
          &nbsp; - &nbsp;
          {pagination.itemCount}
          &nbsp; de &nbsp;
          {pagination.itemCount}
        </>
      ) : (
        <>
          Resultado: &nbsp;
          {pagination.pageIndex === 0
            ? pagination.pageIndex * pagination.pageSize
            : pagination.pageIndex * pagination.pageSize + 1}
          &nbsp; - &nbsp;
          {(pagination.pageIndex + 1) * pagination.pageSize}
          &nbsp; de &nbsp;
          {pagination.itemCount}
        </>
      )}
    </S.CounterItems>
  )
}
