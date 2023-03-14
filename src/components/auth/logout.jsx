import { Navigate } from 'react-router-dom'

const Logout = () => {
  localStorage.removeItem('itkAdminKey')
  return <Navigate to="/" />
}

export default Logout;