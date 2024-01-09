import { configureStore } from '@reduxjs/toolkit'

import movieListSlice from './movies/movies.slice'
import usersSlice from './users/users.slice'
import authSlice from './auth/auth.slice'

export const store = configureStore({
  reducer: {
    movieList: movieListSlice,
    user: usersSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
