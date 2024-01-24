import React from 'react'
import { useFormState } from 'react-dom'

export const Login = () => {

    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    
  return (
        <div className="flex flex-col items-center">
            <p className="font-bold text-2xl">Login</p>
            <form action={dispatch} 
            className="flex flex-col items-center p-4">
                <p className="font-bold text-xl mb-2"> Email </p>
                <input className="font-bold text-md p-2 rounded-sm"
                name="email"
                id="email"
                type="email" 
                placeholder='Email'
                required/>

                <p className="font-bold text-lg"> Password </p>

                <input className="font-bold text-md p-2 rounded-sm mb-2"
                name="password"
                id="password"
                type="password" 
                placeholder='Password'
                required/>

                <button className="font-bold text-xl bg-calorieBlue hover:bg-uiButtonHover text-ultraWhite p-3 rounded-md px-5"
                
                type='submit'>
                    Login
                </button>
            </form>
        </div>
  )
}
