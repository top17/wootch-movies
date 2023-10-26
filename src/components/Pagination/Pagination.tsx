import { StyledPagination } from './Pagination.styled'
import { PaginationProps } from '../../types'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'
import { setPageIndex } from '../../stores/movies/movies.slice'

const Pagination = () => {
  const dispatch = useAppDispatch()
  const { pageIndex, pageSize, total } = useAppSelector(
    (state) => state.movieList
  )

  const handleSetPageIndex = (newPageIndex: PaginationProps) => {
    dispatch(setPageIndex(newPageIndex))
  }

  const previousPage: PaginationProps = {
    pageIndex: pageIndex > 1 ? pageIndex - 1 : 1,
    pageSize: pageSize,
    total: total,
  }

  const nextPage: PaginationProps = {
    pageIndex: pageIndex < total ? pageIndex + 1 : total,
    pageSize: pageSize,
    total: total,
  }
  return (
    <StyledPagination>
      <button
        onClick={() => handleSetPageIndex(previousPage)}
        disabled={pageIndex === 1}
      >
        Previous Page
      </button>
      <div>{pageIndex}</div>
      <button onClick={() => handleSetPageIndex(nextPage)}>Next Page</button>
    </StyledPagination>
  )
}

export default Pagination
