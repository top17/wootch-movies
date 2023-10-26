export type Movie = {
  id: number
  title: string
  poster_path: string
  vote_average: number
  overview: string
}

export interface MoviesResponseList {
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface PaginationProps {
  pageSize: number
  pageIndex: number
  total: number
}

export interface Trailer {
  type: string
  key: string
}

export interface TrailerResposneList {
  results: Trailer[]
}

export interface Genre {
  id: number
  name: string
}

export interface GenreResponseList {
  genres: Genre[]
}
