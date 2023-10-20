import { configureStore } from '@reduxjs/toolkit'

import movieListSlice from './movies/movies.slice'

export const store = configureStore({
  reducer: {
    movieList: movieListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
