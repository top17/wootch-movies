import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home.page'
import LogIn from '../pages/LogIn/LogIn.page'
import Navbar from '../components/NavBar/NavBar'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LogIn />} />
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
