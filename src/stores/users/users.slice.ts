import { createSlice } from '@reduxjs/toolkit'
import {
  fetchUserProfile,
  forgotPassword,
  logInUser,
  logOutUser,
  resetPassword,
  updateUserList,
  verifyUser,
} from '../../api/users.service'
import { User, UserLogIn } from '../../types'

interface initialStateProps {
  user: User[]
  currentUser: UserLogIn | null
  currentUserProfile: User | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  verifyStatus: 'idle' | 'loading' | 'success' | 'alreadyVerified' | 'error'
  forgotPasswordStatus: 'idle' | 'loading' | 'success' | 'error'
  resetedPassword: string
}

const initialState: initialStateProps = {
  user: [],
  currentUser: null,
  currentUserProfile: null,
  status: 'idle',
  forgotPasswordStatus: 'idle',
  verifyStatus: 'idle',
  resetedPassword: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserList.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateUserList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload.data
      })
      .addCase(updateUserList.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(logInUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.currentUser = action.payload
      })
      .addCase(logInUser.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.currentUserProfile = action.payload
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.currentUser = null
        state.currentUserProfile = null
      })
      .addCase(verifyUser.pending, (state) => {
        state.verifyStatus = 'loading'
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.verifyStatus = action.payload
      })
      .addCase(verifyUser.rejected, (state) => {
        state.verifyStatus = 'error'
      })
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPasswordStatus = 'loading'
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.forgotPasswordStatus = 'success'
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.forgotPasswordStatus = 'error'
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.resetedPassword = action.payload
      })
  },
})

export default userSlice.reducer
