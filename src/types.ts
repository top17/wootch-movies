export type Movie = {
  id: number
  title: string
  poster_path: string
  vote_average: number
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
