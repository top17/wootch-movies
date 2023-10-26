import axios, { AxiosResponse } from 'axios'
import { API_KEY, BASE_URL } from '../config'
import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  TrailerResposneList,
  MoviesResponseList,
  GenreResponseList,
} from '../types'

export const getMovieList = createAsyncThunk(
  'api/getMovieList',
  async ({ pageIndex, genre }: { pageIndex: number; genre: number | null }) => {
    const url = `${BASE_URL}/discover/movie?page=${pageIndex}&with_genres=${genre}`

    const config = {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        api_key: API_KEY,
      },
    }

    try {
      const { data }: AxiosResponse<MoviesResponseList> = await axios.get(
        url,
        config
      )

      return {
        results: data.results,
        total_pages: data.total_pages,
        total_results: data.total_results,
      }
    } catch (error) {
      console.error(error)
    }
  }
)

export const searchMovieList = createAsyncThunk(
  'api/searchMovieList',
  async (param: string) => {
    let url = `${BASE_URL}/search/movie?query=${param}`

    const config = {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        api_key: API_KEY,
      },
    }

    try {
      const { data }: AxiosResponse<MoviesResponseList> = await axios.get(
        url,
        config
      )
      return {
        results: data.results,
        total_pages: data.total_pages,
        total_results: data.total_results,
      }
    } catch (error) {
      console.error(error)
    }
  }
)

export const getMovieTrailer = createAsyncThunk(
  'api/getMovieTrailer',
  async (id: number) => {
    const url = `${BASE_URL}/movie/${id}/videos`

    const config = {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        api_key: API_KEY,
      },
    }

    try {
      const { data }: AxiosResponse<TrailerResposneList> = await axios.get(
        url,
        config
      )
      return data.results
    } catch (error) {
      console.error(error)
    }
  }
)

export const getGenreList = createAsyncThunk('api/getGenreList', async () => {
  const url = `${BASE_URL}/genre/movie/list?language=en`

  const config = {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      api_key: API_KEY,
    },
  }

  try {
    const { data }: AxiosResponse<GenreResponseList> = await axios.get(
      url,
      config
    )

    return {
      genres: data.genres,
    }
  } catch (error) {
    console.error(error)
  }
})
