import { Formik, ErrorMessage } from 'formik'
import { logInUser, updateUserList } from '../../api/users.service'
import { useAppDispatch } from '../../stores/hooks'
import { User, UserLogIn } from '../../types'
import * as Yup from 'yup'
import Cookies from 'universal-cookie'
import { setAccessToken } from '../../stores/auth/auth.slice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  StyledAlert,
  StyledForm,
  StyledField,
  StyledButton,
  StyledDiv,
  StyledMailIcon,
  StyledLockIcon,
  StyledUserIcon,
} from './AuthForm.styled'

interface AuthFormProps {
  isLogin: boolean
  onForgotPassword: () => void
}

const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[.,:;]).{8,}$/,
      'Password must be 8 characters long, contain one capital letter, one digit, and one of the special characters'
    )
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Password confirmation is required'),
})

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  onForgotPassword,
}: AuthFormProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cookies = new Cookies()
  const [errorMessage, setErrorMessage] = useState('')
  const [verifyMessage, setVerifyMessage] = useState('')
  const [alreadyExist, setAlreadyExist] = useState('')

  const validationSchema = isLogin
    ? loginValidationSchema
    : signUpValidationSchema

  const initialValues: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  const handleSubmit = (values: User | UserLogIn) => {
    if (isLogin) {
      dispatch(logInUser(values as UserLogIn))
        .unwrap()
        .then((response) => {
          const { accessToken } = response
          dispatch(setAccessToken(accessToken))
          cookies.set('accessToken', accessToken, { path: '/' })
          setErrorMessage('')
          navigate('/')
        })
        .catch((error) => {
          if (error === 'Invalid email or password') {
            setErrorMessage('Invalid email or password')
          }
        })
    } else {
      dispatch(updateUserList(values as User))
        .unwrap()
        .then((response) => {
          setVerifyMessage(`${response}. Please verify your email.`)
          setTimeout(() => navigate('/'), 5000)
        })
        .catch((error) => {
          setAlreadyExist('Email already in use')
          console.error(error)
        })
    }
  }

  const handleEmailChange = () => {
    setAlreadyExist('')
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <StyledForm>
        <div style={{ display: 'flex', gap: '30px' }}>
          {!isLogin && (
            <StyledDiv>
              <StyledUserIcon />
              <StyledField
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage name="firstName" component="div" />
            </StyledDiv>
          )}

          {!isLogin && (
            <StyledDiv>
              <StyledUserIcon />
              <StyledField
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <ErrorMessage name="lastName" component="div" />
            </StyledDiv>
          )}
        </div>

        <StyledDiv>
          <StyledMailIcon />
          <StyledField
            type="email"
            name="email"
            placeholder="Email"
            onFocus={handleEmailChange}
          />
          <ErrorMessage name="email" component="div" />
        </StyledDiv>
        <StyledAlert>{alreadyExist}</StyledAlert>

        <StyledDiv>
          <StyledLockIcon />
          <StyledField type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </StyledDiv>
        <StyledAlert>{errorMessage}</StyledAlert>

        {!isLogin && (
          <StyledDiv>
            <StyledLockIcon />
            <StyledField
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
            />
            <ErrorMessage name="passwordConfirmation" component="div" />
          </StyledDiv>
        )}
        <div style={{ color: 'red', textAlign: 'center' }}>{verifyMessage}</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <StyledButton type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </StyledButton>
          {isLogin && (
            <span
              style={{
                cursor: 'pointer',
                color: '#1971c2',
                marginLeft: '10px',
              }}
              onClick={onForgotPassword}
            >
              Forgot password?
            </span>
          )}
        </div>
      </StyledForm>
    </Formik>
  )
}

export default AuthForm
