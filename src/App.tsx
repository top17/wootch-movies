import MainRoutes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cookies from 'universal-cookie'
import { useAppDispatch } from './stores/hooks'
import { useEffect } from 'react'
import { setAccessToken } from './stores/auth/auth.slice'

function App() {
  const dispatch = useAppDispatch()
  const cookies = new Cookies()
  const savedToken = cookies.get('accessToken')
  useEffect(() => {
    if (savedToken) {
      dispatch(setAccessToken(savedToken))
    }
  }, [dispatch, savedToken])
  return (
    <div>
      <MainRoutes />
    </div>
  )
}

export default App
