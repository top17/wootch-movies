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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.3s;

  &:hover {
    background-color: #fff;
    color: #ffa8a8;
    border-radius: 0.5rem;
  }
`
export const StyledImg = styled.img`
  height: 6rem;

  &:hover {
    cursor: pointer;
  }
`

export const MenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const DropdownMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
