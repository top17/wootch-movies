import styled from 'styled-components'

export const StyledDivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

export const StyledDivBox = styled.div`
  background: linear-gradient(135deg, #ffc9c9, #ffa8a8);
  text-align: center;
  margin: 1rem 0.5rem;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  color: #000;

  & img {
    width: 10rem;
  }
`

export const StyledPagination = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
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

  & p {
    color: #fff;
  }
`

export const StyledDivTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const StyledDivClipLoader = styled.div`
  display: flex;
  justify-content: center;
`
