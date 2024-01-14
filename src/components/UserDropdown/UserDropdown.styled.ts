import styled from 'styled-components'
import { FaRegUserCircle } from 'react-icons/fa'

export const StyledDropdown = styled.div`
  position: absolute;
  transform: translate(-25%, 20%);
  width: 100px;
  text-align: center;
  background-color: white;
  color: #ffb9b9;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -8px;
    left: 30px;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
  }

  :hover {
    background-color: #ffb9b9;
    color: white;
    border-radius: 10px;
  }
`
export const StyledUserIcon = styled(FaRegUserCircle)`
  width: 30px;
  height: 30px;
  color: white;
`
