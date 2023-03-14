import { Navigate, Outlet } from 'react-router-dom'

const userAuth = () => {
  const user = { loggedIn: localStorage.getItem('itkAdminKey') }
  return user && user.loggedIn
}

const ProtectedRoutes = () => {
  const isAuth = userAuth()
  return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
