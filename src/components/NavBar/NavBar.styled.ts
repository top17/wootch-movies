import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavBar = styled.nav`
  background-color: #ffa8a8;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  justify-content: space-between;
  padding: 0 1.5rem;
`

export const StyledNavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
    border-radius: 0.5rem;
  }
`
export const StyledImg = styled.img`
  height: 6rem;

  &:hover {
    cursor: pointer;
  }
`
