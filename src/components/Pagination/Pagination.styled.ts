import styled from 'styled-components'

export const StyledPagination = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  & button {
    padding: 10px 20px;
    background-color: #ffa8a8;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  & button:hover {
    background-color: #ff8c8c;
  }

  & div {
    color: #ff8c8c;
    border: 1px solid #ff8c8c;
    padding: 10px 20px;
    border-radius: 50%;
  }
`
