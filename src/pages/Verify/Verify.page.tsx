import { useParams } from 'react-router-dom'
import { verifyUser } from '../../api/users.service'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'
import { useEffect } from 'react'
import { StyledDiv } from './Verify.styled'

const Verify = () => {
  const dispatch = useAppDispatch()
  const { id = '', verificationCode = '' } = useParams()
  const { verifyStatus } = useAppSelector((state) => state.user)

  useEffect(() => {
    try {
      dispatch(verifyUser({ id, verificationCode }))
    } catch (error) {
      console.error('Error during verification:', error)
    }
  }, [])

  return (
    <StyledDiv>
      {verifyStatus === 'loading' && <p>Verifying...</p>}
      {verifyStatus === 'success' && <p>User successfully verified</p>}
      {verifyStatus === 'alreadyVerified' && <p>User is already verified</p>}
      {verifyStatus === 'error' && (
        <p>There was an error verifying your account.</p>
      )}
    </StyledDiv>
  )
}

export default Verify
