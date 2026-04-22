import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utilis/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] })

  useEffect(() => {
    setLocalStorage()
    const { employees = [], admin = [] } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])

  return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>
}

export default AuthProvider
