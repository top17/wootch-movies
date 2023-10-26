import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Genre, Movie, PaginationProps, Trailer } from '../../types'
import {
  getMovieList,
  getMovieTrailer,
  searchMovieList,
  getGenreList,
} from '../../api/movies.service'

interface initialStateProps {
  movieList: Movie[]
  trailerList: Trailer[]
  genreList: Genre[]
  genre: number | null
  loading: boolean
  total: number
  pageIndex: number
  pageSize: number
  param: string
}

const initialState: initialStateProps = {
  movieList: [],
  trailerList: [],
  genreList: [],
  genre: null,
  loading: false,
  total: 0,
  pageIndex: 1,
  pageSize: 20,
  param: '',
}

const movieListSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {
    setPageIndex: (state, action: PayloadAction<PaginationProps>) => {
      state.pageIndex = action.payload.pageIndex
    },
    setParam: (state, action: PayloadAction<string>) => {
      state.param = action.payload
    },
    setSelectedGenre: (state, action: PayloadAction<number>) => {
      state.genre = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.fulfilled, (state, action) => {
        if (action.payload) {
          state.movieList = action.payload.results
          state.total = action.payload.total_pages
        }
        state.loading = false
      })
      .addCase(getMovieList.pending, (state) => {
        state.loading = true
      })
      .addCase(getMovieList.rejected, (state) => {
        state.loading = false
      })
      .addCase(searchMovieList.fulfilled, (state, action) => {
        if (action.payload) {
          state.movieList = action.payload.results
          state.total = action.payload.total_results
        }
        state.loading = false
      })
      .addCase(searchMovieList.pending, (state) => {
        state.loading = true
      })
      .addCase(searchMovieList.rejected, (state) => {
        state.loading = false
      })
      .addCase(getMovieTrailer.fulfilled, (state, action) => {
        if (action.payload) {
          state.trailerList = action.payload
        }
        state.loading = false
      })
      .addCase(getMovieTrailer.pending, (state) => {
        state.loading = true
      })
      .addCase(getMovieTrailer.rejected, (state) => {
        state.loading = false
      })
      .addCase(getGenreList.fulfilled, (state, action) => {
        if (action.payload) {
          state.genreList = action.payload.genres
        }
        state.loading = false
      })
      .addCase(getGenreList.pending, (state) => {
        state.loading = true
      })
      .addCase(getGenreList.rejected, (state) => {
        state.loading = false
      })
  },
})
const { actions } = movieListSlice

export const { setPageIndex, setParam, setSelectedGenre } = actions
export default movieListSlice.reducer
