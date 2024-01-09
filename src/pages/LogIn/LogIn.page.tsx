import { useState } from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }
  const handleForgotPassword = () => {
    navigate('/api/users/forgotpassword')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10rem',
      }}
    >
      {isLogin ? (
        <div>
          <h2>Login</h2>
          <AuthForm isLogin={isLogin} onForgotPassword={handleForgotPassword} />
        </div>
      ) : (
        <div>
          <h2>Sign Up</h2>
          <AuthForm isLogin={false} onForgotPassword={() => {}} />
        </div>
      )}
      <div style={{ display: 'flex', alignContent: 'center' }}>
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <span
          onClick={toggleForm}
          style={{ cursor: 'pointer', color: '#1971c2' }}
        >
          {isLogin ? 'Sign up' : 'Login'}
        </span>
      </div>
    </div>
  )
}

export default LoginPage
