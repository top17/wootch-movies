import SearchBox from '../SearchBox/SearchBox'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../stores/hooks'
import { getMovieList } from '../../api/movies.service'

import {
  StyledNavBar,
  StyledNavItems,
  StyledNavLink,
  StyledImg,
} from './NavBar.styled'

const Navbar = () => {
  const dispatch = useAppDispatch()

  return (
    <StyledNavBar>
      <NavLink
        to="/"
        onClick={() =>
          //@ts-ignore
          dispatch(getMovieList((pageIndex = 1)))
            .unwrap()
            .catch(console.error)
        }
      >
        <StyledImg src="src/assets/logo.png" />
      </NavLink>
      <StyledNavItems>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/login">Login</StyledNavLink>
        <SearchBox />
      </StyledNavItems>
    </StyledNavBar>
  )
}

export default Navbar
