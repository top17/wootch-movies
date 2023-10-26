import styled from 'styled-components'

export const StyledDivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
`

export const StyledDivBox = styled.div`
  background: linear-gradient(135deg, #ffc9c9, #ffa8a8);
  text-align: center;
  margin: 1rem 0.5rem;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #ffadad, #ff9090);
    cursor: pointer;
  }

  & img {
    width: 10rem;
  }
`

export const StyledDivTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const StyledVoteAverage = styled.div`
  border: 0 solid #ff8c8c;
  padding: 0.2rem;
  background-color: ${(props) => {
    //@ts-ignore
    const value = parseFloat(props['data-value'])
    if (value > 7.5) return '#8ce99a'
    if (value > 6) return '#ffe066'
    return '#fa5252'
  }};
`

export const StyledDivClipLoader = styled.div`
  display: flex;
  justify-content: center;
`
