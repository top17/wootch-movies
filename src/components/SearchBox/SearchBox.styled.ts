import styled from 'styled-components'

export const StyledDivInput = styled.div`
  height: 2rem;
  display: flex;
  cursor: pointer;
  padding: 0.25rem 1rem;
  background: #fff;
  border-radius: 30px;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  &:hover input {
    width: 10rem;
  }
`
export const StyledInput = styled.input`
  width: 0;
  outline: none;
  border: none;
  font-weight: 500;
  transition: 0.8s;
  background: transparent;
`
