import React, {useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../utilis/localStorage'

const AuthContext = ({children}) => {

    useEffect(()=>{
        setLocalStorage()
        getLocalStorage()
    },[])
  return (
    <div>{children}</div>
  )
}

export default AuthContext
