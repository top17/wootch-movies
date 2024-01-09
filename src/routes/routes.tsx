import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home.page'
import LogIn from '../pages/LogIn/LogIn.page'
import Navbar from '../components/NavBar/NavBar'
import Verify from '../pages/Verify/Verify.page'
import ResetPassword from '../pages/ResetPassword/ResetPassword.page'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword.page'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LogIn />} />
      <Route
        path="api/users/verify/:id/:verificationCode"
        element={<Verify />}
      />
      <Route path="/api/users/forgotpassword" element={<ForgotPassword />} />
      <Route
        path="/api/users/reset/:id/:passwordResetCode"
        element={<ResetPassword />}
      />
    </Routes>
  )
}

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  )
}

export default MainRoutes
