import axios, { AxiosResponse } from 'axios'
import { API_KEY, BASE_URL } from '../config'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { Movie } from '../types'

interface MoviesResponseList {
  results: Movie[]
  total_pages: number
  total_results: number
}

export const getMovieList = createAsyncThunk(
  'api/getMovieList',
  async (pageIndex: number) => {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${pageIndex}`

    const config = {
      headers: {
        Authorization: API_KEY,
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
    let url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${param}`

    const config = {
      headers: {
        Authorization: API_KEY,
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
