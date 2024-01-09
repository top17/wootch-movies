import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, UserLogIn, UserPasswordVerify, UserVerify } from '../types'

export const updateUserList = createAsyncThunk(
  'api/updateUserList',
  async (values: User) => {
    const url = `https://wootch-movies-api.onrender.com/api/users`

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const { data } = await axios.post(url, values, config)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const verifyUser = createAsyncThunk(
  'api/verifyUser',
  async ({ id, verificationCode }: UserVerify) => {
    const url = `https://wootch-movies-api.onrender.com/api/users/verify/${id}/${verificationCode}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const { data } = await axios.get(url, config)
      if (data === 'User successfully verified') {
        return 'success'
      } else if (data === 'User is already verified') {
        return 'alreadyVerified'
      } else {
        return 'error'
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const logInUser = createAsyncThunk(
  'api/logInUser',
  async (values: UserLogIn, { rejectWithValue }) => {
    const url = `https://wootch-movies-api.onrender.com/api/sessions`

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const { data } = await axios.post(url, values, config)
      if (data === 'Invalid email or password') {
        return rejectWithValue('Invalid email or password')
      }
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const logOutUser = createAsyncThunk(
  'api/logOutUser',
  async (accessToken: string) => {
    const url = `https://wootch-movies-api.onrender.com/api/sessions`

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    try {
      const { data } = await axios.delete(url, config)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const fetchUserProfile = createAsyncThunk(
  'api/fetchUserProfile',
  async (accessToken: string) => {
    const url = 'https://wootch-movies-api.onrender.com/api/users/me'

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    try {
      const { data } = await axios.get(url, config)
      return data
    } catch (error) {
      console.error('Error fetching user profile:', error)
      throw error
    }
  }
)

export const forgotPassword = createAsyncThunk(
  'api/forgotPassword',
  async (email: string) => {
    const url = `https://wootch-movies-api.onrender.com/api/users/forgotpassword`

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const { data } = await axios.post(url, { email }, config)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const resetPassword = createAsyncThunk(
  'api/resetPassword',
  async ({
    id,
    passwordResetCode,
    password,
    passwordConfirmation,
  }: UserPasswordVerify) => {
    const url = `https://wootch-movies-api.onrender.com/api/users/resetpassword/${id}/${passwordResetCode}`

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const passwordReset = {
      password,
      passwordConfirmation,
    }

    try {
      const { data } = await axios.post(url, passwordReset, config)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)
