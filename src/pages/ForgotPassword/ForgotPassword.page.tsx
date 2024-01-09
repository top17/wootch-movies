import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '../../stores/hooks'
import { forgotPassword } from '../../api/users.service'
import {
  StyledButton,
  StyledField,
  StyledForm,
  StyledMailIcon,
} from '../../components/AuthForm/AuthForm.styled'

const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const initialValues: { email: string } = {
    email: '',
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  })

  const handleSubmit = ({ email }: { email: string }) => {
    console.log(email)

    dispatch(forgotPassword(email)).unwrap().catch(console.error)
  }

  return (
    <div
      style={{ display: 'flex', marginTop: '10rem', justifyContent: 'center' }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <StyledMailIcon />
          <StyledField type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <StyledButton type="submit">Send reset link</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  )
}

export default ForgotPassword
