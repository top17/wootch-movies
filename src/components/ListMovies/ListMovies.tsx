import { useEffect, useState } from 'react'
import {
  getMovieList,
  getMovieTrailer,
  searchMovieList,
} from '../../api/movies.service'
import ModalOverview from '../Modal/ModalOverview'
import { setParam } from '../../stores/movies/movies.slice'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'

import { Movie } from '../../types'

import { ClipLoader } from 'react-spinners'
import {
  StyledDivBox,
  StyledDivClipLoader,
  StyledDivContainer,
  StyledDivTitle,
  StyledVoteAverage,
} from './ListMovies.styled'

const ListMovies = () => {
  const dispatch = useAppDispatch()

  const [lgShow, setLgShow] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const { movieList, param, pageIndex, loading, trailerList, genre } =
    useAppSelector((state) => state.movieList)

  useEffect(() => {
    if (param === '') {
      dispatch(setParam(''))
      dispatch(getMovieList({ pageIndex, genre })).unwrap().catch(console.error)
    } else {
      dispatch(searchMovieList(param)).unwrap().catch(console.error)
    }
  }, [param, pageIndex, genre])

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie)
    setLgShow(true)
    dispatch(getMovieTrailer(movie.id)).unwrap().catch(console.error)
  }

  return (
    <div style={{ maxWidth: '100%' }}>
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
                  <div style={{ color: '#fff' }}>{data.title}</div>
                  <StyledVoteAverage data-value={data.vote_average}>
                    {data.vote_average.toFixed(1)}
                  </StyledVoteAverage>
                </StyledDivTitle>
              </StyledDivBox>
            ))}
          </StyledDivContainer>
        </div>
      )}
    </div>
  )
}

export default ListMovies
