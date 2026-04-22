import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null)
  const { userData } = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      setLoggedInUserEmail(parsedUser.email || null)
    }

  },[])

  const loggedInEmployeeData = userData?.employees?.find(
    (employee) => employee.email === loggedInUserEmail
  ) || null

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    const employee = userData?.employees?.find(
      (e) => email === e.email && password === e.password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserEmail(employee.email)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', email: employee.email })
      )
    } else {
      alert("Invalid Credentials")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setLoggedInUserEmail(null)
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard handleLogout={handleLogout} /> : (user == 'employee' ? <EmployeeDashboard handleLogout={handleLogout} data={loggedInEmployeeData} /> : null) }
    </>
  )

}

export default App
