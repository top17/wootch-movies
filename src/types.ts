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
  pageIndex: number
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

export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

export type UserLogIn = {
  email: string
  password: string
  accessToken?: string
}

export type UserPasswordVerify = {
  id: string
  passwordResetCode: string
  password: string
  passwordConfirmation: string
}

export type UserResetPassword = {
  password: string
  passwordConfirmation: string
}

export type UserVerify = {
  id: string
  verificationCode: string
}
