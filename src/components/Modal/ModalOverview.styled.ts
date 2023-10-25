import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'

export const StyledModal = styled(Modal)`
  .modal-content {
    background-color: #ffe3e3;
    border-radius: 5px;
    height: 80vh;
  }
  .modal-title {
    font-size: 26px;
  }

  .modal-body {
    font-size: 16px;
    padding: 20px;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5rem;
    gap: 2rem;

    & div {
      text-align: center;
    }
  }
`
export const StyledHeader = styled.div`
  margin: 0 auto;
  margin-top: 20px;
`
