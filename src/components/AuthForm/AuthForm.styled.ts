import styled from 'styled-components'
import { Form, Field } from 'formik'
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'

export const StyledAlert = styled.div`
  text-align: center;
  color: red;
`
export const StyledForm = styled(Form)`
  background-color: #ffc9c9;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
`

export const StyledDiv = styled.div`
  margin-bottom: 10px;
`

export const StyledField = styled(Field)`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledButton = styled.button`
  background-color: #ffa8a8;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: #ffa8a8;
  }
`

export const StyledMailIcon = styled(AiOutlineMail)`
  font-size: 24px;
  color: #ffa8a8;
  position: relative;
  left: 330px;
  top: 30px;
`

export const StyledLockIcon = styled(AiOutlineLock)`
  font-size: 24px;
  color: #ffa8a8;
  position: relative;
  left: 330px;
  top: 30px;
`
export const StyledUserIcon = styled(AiOutlineUser)`
  font-size: 24px;
  color: #ffa8a8;
  position: relative;
  transform: translate(130px, 30px);
`
