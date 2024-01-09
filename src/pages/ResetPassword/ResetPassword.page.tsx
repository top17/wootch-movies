import { ErrorMessage, Formik } from 'formik'
import { UserResetPassword } from '../../types'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'
import { resetPassword } from '../../api/users.service'
import { useParams } from 'react-router-dom'
import {
  StyledButton,
  StyledField,
  StyledForm,
  StyledLockIcon,
} from '../../components/AuthForm/AuthForm.styled'

const ResetPassword = () => {
  const dispatch = useAppDispatch()
  const { resetedPassword } = useAppSelector((state) => state.user)
  console.log(resetedPassword)

  const { id = '', passwordResetCode = '' } = useParams()
  const initialValues: UserResetPassword = {
    password: '',
    passwordConfirmation: '',
  }
  const validationSchema = Yup.object().shape({
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

  const handleSubmit = (values: UserResetPassword) => {
    dispatch(resetPassword({ id, passwordResetCode, ...values }))
      .unwrap()
      .catch(console.error)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10rem',
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <StyledLockIcon />
          <StyledField type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />

          <StyledLockIcon />
          <StyledField
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
          />
          <ErrorMessage name="passwordConfirmation" component="div" />
          <StyledButton type="submit">Reset</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  )
}

export default ResetPassword
