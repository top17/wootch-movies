import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'
import { getGenreList } from '../../api/movies.service'
import { setSelectedGenre } from '../../stores/movies/movies.slice'
import Select from 'react-select'
import { customStyles } from './ListGenres.styled'

const ListGenres = () => {
  const dispatch = useAppDispatch()
  const { genreList, genre } = useAppSelector((state) => state.movieList)

  useEffect(() => {
    dispatch(getGenreList()).unwrap().catch(console.error)
  }, [dispatch])

  const handleGenreClick = (value: number) => {
    dispatch(setSelectedGenre(value))
  }

  const selectOptions = genreList.map((genre) => ({
    value: genre.id,
    label: genre.name,
  }))

  return (
    <Select
      styles={customStyles}
      options={selectOptions}
      value={selectOptions.find((opt) => opt.value === genre)}
      onChange={(selectedOption) => {
        handleGenreClick(selectedOption?.value || 0)
      }}
      placeholder="Genre"
    />
  )
}

export default ListGenres
