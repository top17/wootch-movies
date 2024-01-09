import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'
import { fetchUserProfile, logOutUser } from '../../api/users.service'
import Cookies from 'universal-cookie'

const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch()
  const { currentUser, currentUserProfile } = useAppSelector(
    (state) => state.user
  )

  const cookies = new Cookies()
  const savedToken = cookies.get('accessToken')

  useEffect(() => {
    const fetchUser = async () => {
      if (savedToken) {
        try {
          await dispatch(fetchUserProfile(savedToken))
        } catch (error) {
          console.error('Error fetching user profile:', error)
        }
      } else if (currentUser?.accessToken)
        try {
          await dispatch(fetchUserProfile(currentUser.accessToken))
        } catch (error) {
          console.error('Error fetching user profile:', error)
        }
    }
    fetchUser()
  }, [currentUser, savedToken])

  const handleLogOut = async () => {
    cookies.remove('accessToken')

    if (savedToken) {
      await dispatch(logOutUser(savedToken))
      window.location.reload()
    }
  }

  return (
    <div>
      {currentUserProfile && (
        <div>
          <p>Email: {currentUserProfile.email}</p>
          <p>Name: {currentUserProfile.firstName}</p>
          <p>Last Name: {currentUserProfile.lastName}</p>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default UserProfile
