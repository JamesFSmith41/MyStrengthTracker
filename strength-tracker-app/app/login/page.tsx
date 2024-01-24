import React from 'react'
import { Login } from '../Components/Login/Login'

const login = () => {
  return (
    <div className="flex flex-col min-w-fill min-h-fill w-screen h-screen items-center justify-center">
         <div className="flex flex-col justify-center  items-center bg-uiElement rounded-md max-w-md">
            <Login/>

         </div>
    </div>
  )
}

export default login;