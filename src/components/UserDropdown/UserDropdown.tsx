import { useState } from 'react'
import { useAppDispatch } from '../../stores/hooks'
import { logOutUser } from '../../api/users.service'
import Cookies from 'universal-cookie'

import { StyledDropdown, StyledUserIcon } from './UserDropdown.styled'

const UserDropdown: React.FC = () => {
  const dispatch = useAppDispatch()
  const cookies = new Cookies()
  const savedToken = cookies.get('accessToken')

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLogOut = async () => {
    cookies.remove('accessToken')

    if (savedToken) {
      await dispatch(logOutUser(savedToken))
      window.location.reload()
    }
  }

  const handleOptionClick = (optionValue: string) => {
    if (optionValue === 'logout') {
      handleLogOut()
    } else {
      window.location.href = optionValue
    }
  }

  const dropdownData = [
    { value: '/userProfile', label: 'Dashboard' },
    { value: '/', label: 'Watchlist' },
    { value: 'logout', label: 'Logout' },
  ]

  return (
    <div>
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{ cursor: 'pointer' }}
      >
        <StyledUserIcon />
      </div>
      {isDropdownOpen && (
        <StyledDropdown>
          {dropdownData.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              style={{ cursor: 'pointer' }}
            >
              {option.label}
            </div>
          ))}
        </StyledDropdown>
      )}
    </div>
  )
}

export default UserDropdown
