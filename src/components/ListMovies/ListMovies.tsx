import { useEffect, useState } from 'react'
import {
  getMovieList,
  getMovieTrailer,
  searchMovieList,
} from '../../api/movies.service'
import ModalOverview from '../Modal/ModalOverview'
import { setParam, setPageIndex } from '../../stores/movies/movies.slice'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'

import { Movie, PaginationProps } from '../../types'

import { ClipLoader } from 'react-spinners'
import {
  StyledDivBox,
  StyledDivClipLoader,
  StyledDivContainer,
  StyledDivTitle,
  StyledPagination,
  StyledVoteAverage,
} from './ListMovies.styled'

const ListMovies = () => {
  const dispatch = useAppDispatch()

  const [lgShow, setLgShow] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const { movieList, param, pageIndex, pageSize, total, loading, trailerList } =
    useAppSelector((state) => state.movieList)

  useEffect(() => {
    if (param === '') {
      dispatch(setParam(''))
      dispatch(getMovieList(pageIndex)).unwrap().catch(console.error)
    } else {
      dispatch(searchMovieList(param)).unwrap().catch(console.error)
    }
  }, [param, pageIndex])

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie)
    setLgShow(true)
    dispatch(getMovieTrailer(movie.id)).unwrap().catch(console.error)
  }

  console.log(trailerList)

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
    <div>
      {loading ? (
        <StyledDivClipLoader>
          <ClipLoader size={50} color={'#fff'} loading={loading} />
        </StyledDivClipLoader>
      ) : (
        <div>
          <ModalOverview
            show={lgShow}
            onHide={() => setLgShow(false)}
            movie={selectedMovie}
            trailerKey={
              trailerList.find((item) => item.type === 'Trailer')?.key || ''
            }
          />
          <StyledDivContainer className="StyledDiv">
            {movieList.map((data: Movie) => (
              <StyledDivBox
                key={data.id}
                onClick={() => handleMovieClick(data)}
              >
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
                  <div>{data.title}</div>
                  <StyledVoteAverage data-value={data.vote_average}>
                    {data.vote_average.toFixed(1)}
                  </StyledVoteAverage>
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
            <div>{pageIndex}</div>
            <button onClick={() => handleSetPageIndex(nextPage)}>
              Next Page
            </button>
          </StyledPagination>
        </div>
      )}
    </div>
  )
}

export default ListMovies
