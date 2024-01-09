import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  accessToken: string | null
  // other user-related state properties
}

const initialState: AuthState = {
  accessToken: null,
  // other initial state properties
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
  },
})
const { actions } = authSlice
export const { setAccessToken } = actions
export default authSlice.reducer
