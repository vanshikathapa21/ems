import React, { useState } from 'react'
import Login from './components/Auth/Login'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    const adminData = JSON.parse(localStorage.getItem('admin')) || []
    const employeeData = JSON.parse(localStorage.getItem('employees')) || []

    const adminUser = adminData.find(
      (item) => item.email === email && item.password === password
    )
    const employeeUser = employeeData.find(
      (item) => item.email === email && item.password === password
    )

    if (adminUser) {
      console.log('this is admin')
      setUser('admin')
    } else if (employeeUser) {
      console.log('this is user')
      setUser('user')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
   <>
  {!user ? <Login handleLogin={handleLogin} /> : '' }
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
   </>
  )
}

export default App
