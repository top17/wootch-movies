import { useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'
import { getMovieList } from '../../api/movies.service'

import {
  StyledNavBar,
  StyledNavItems,
  StyledNavLink,
  StyledImg,
  DropdownMenu,
  MenuButton,
} from './NavBar.styled'
import ListGenres from '../ListGenres/ListGenres'
import {
  setPageIndex,
  setParam,
  setSelectedGenre,
} from '../../stores/movies/movies.slice'
import UserProfile from '../UserProfile/UserProfile'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const { accessToken } = useAppSelector((state) => state.auth)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showSearchAndGenres = location.pathname === '/'

  const handleHomePage = () => {
    dispatch(setPageIndex({ pageIndex: 1 }))
    dispatch(getMovieList({ pageIndex: 1, genre: null }))
      .unwrap()
      .catch(console.error)
    dispatch(setParam(''))
    dispatch(setSelectedGenre(null))
  }

  return (
    <StyledNavBar>
      <NavLink to="/" onClick={handleHomePage}>
        <StyledImg src="/logo.png" />
      </NavLink>
      <StyledNavItems>
        <StyledNavLink to="/" onClick={handleHomePage}>
          Home
        </StyledNavLink>
        {accessToken ? (
          <UserProfile />
        ) : (
          <StyledNavLink to="/login">Login</StyledNavLink>
        )}
        {showSearchAndGenres && (
          <>
            <ListGenres />
            <SearchBox />
          </>
        )}
      </StyledNavItems>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</MenuButton>
      {isMenuOpen && (
        <DropdownMenu>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
          {showSearchAndGenres && (
            <>
              <ListGenres />
              <SearchBox />
            </>
          )}
        </DropdownMenu>
      )}
    </StyledNavBar>
  )
}

export default Navbar
