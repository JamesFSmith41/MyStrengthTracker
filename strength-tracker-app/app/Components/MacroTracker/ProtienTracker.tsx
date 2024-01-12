'use client'
import React from 'react'
import { useState } from 'react';
import type { User } from '@/app/lib/defintions';

export const ProtienTracker = (user : User) => {
    const [protien, setProtien] = useState(user.protien)
    const [protienInput, setInput] = useState(0)
    const [backColor, setColor] = useState("bg-calorieBlue")
    async function Addprotien() {
        await setProtien(protien + protienInput)
        ChangeBackgroundColor(protien + protienInput)
        console.log(protien + protienInput)
    }
  
    function ChangeBackgroundColor(updatedprotien : number) {
      if (updatedprotien > 180) {
        setColor("bg-calorieRed")
      }
      else if (updatedprotien < 100) {
        setColor("bg-calorieBlue")
      }
      else {
        setColor("bg-calorieGreen")
      }
    }
  
    return (
      <div className="flex flex-col bg-uiElement p-10 border-slate-950 rounded-md min-w-10 w-96 max-w-96 items-center">
          <p className="font-bold text-2xl">
              Protien
          </p>
          <div className="flex flex-col items-center w-36">
            <div className={`flex flex-col ${backColor} rounded-md w-full h-full min-h-20 justify-center mt-5`}>
              <p className="text-2xl font-bold text-center text-ultraWhite">
                {protien}
              </p>
            </div>
            <input
            className="rounded-md p-2 m-2 mt-5 w-full h-full min-h-10" 
            type="number"
            placeholder='Enter Protien'
            id="protien"
            onChange={e => setInput(Number(e.target.value))}
            />
            <button 
            onClick={() => Addprotien()}
            className="bg-uiButton text-xl font-bold hover:bg-uiButtonHover p-2 m-2 rounded-md w-full text-ultraWhite">
                Add Protien
            </button>
          </div>
          
      </div>
    )
}
