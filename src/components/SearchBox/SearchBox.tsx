import { useEffect } from 'react'
import { searchMovieList } from '../../api/movies.service'
import { setParam } from '../../stores/movies/movies.slice'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'

import { FaSearch } from 'react-icons/fa'
import { StyledDivInput, StyledInput } from './SearchBox.styled'

const SearchBox = () => {
  const dispatch = useAppDispatch()

  const { param } = useAppSelector((state) => state.movieList)

  useEffect(() => {
    if (param) {
      dispatch(searchMovieList(param)).unwrap().catch(console.error)
    }
  }, [param])

  const handleSearch = (param: string) => {
    if (param.trim() === '') {
      dispatch(setParam(''))
    } else {
      dispatch(setParam(param))
    }
  }

  return (
    <StyledDivInput>
      <StyledInput
        type="text"
        value={param}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for movies"
      />
      <FaSearch />
    </StyledDivInput>
  )
}

export default SearchBox
