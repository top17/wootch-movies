import { useEffect } from 'react'
import { getMovieList, searchMovieList } from '../../api/movies.service'
import { setParam, setPageIndex } from '../../stores/movies/movies.slice'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'

import { Movie, PaginationProps } from '../../types'

import {
  StyledDivBox,
  StyledDivContainer,
  StyledDivTitle,
  StyledPagination,
} from './ListMovies.styled'

const ListMovies = () => {
  const dispatch = useAppDispatch()

  const { movieList, param, pageIndex, pageSize, total } = useAppSelector(
    (state) => state.movieList
  )

  useEffect(() => {
    if (param === '') {
      dispatch(setParam(''))
      dispatch(getMovieList(pageIndex)).unwrap().catch(console.error)
    } else {
      dispatch(searchMovieList(param)).unwrap().catch(console.error)
    }
  }, [param, pageIndex])

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
  const displayedMovies = movieList.slice(pageIndex, total)

  return (
    <div>
      <StyledDivContainer className="StyledDiv">
        {displayedMovies.map((data: Movie) => (
          <StyledDivBox key={data.id}>
            <img
              key={data.id}
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                  : '/default.jpg'
              }
              alt={data.title}
            />
            <StyledDivTitle>
              <p>{data.title}</p>
              <p>{data.vote_average.toFixed(1)}</p>
            </StyledDivTitle>
          </StyledDivBox>
        ))}
      </StyledDivContainer>
      <StyledPagination>
        <button
          onClick={() => handleSetPageIndex(previousPage)}
          disabled={pageIndex === 1}
        >
          Previous Page
        </button>
        <p>{pageIndex}</p>
        <button onClick={() => handleSetPageIndex(nextPage)}>Next Page</button>
      </StyledPagination>
    </div>
  )
}

export default ListMovies
