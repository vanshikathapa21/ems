import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskListNumbers from './components/other/TaskListNumbers'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utilis/localStorage'

const App = () => {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)


  return (
   <>
   <Login />
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
   </>
  )
}

export default App
