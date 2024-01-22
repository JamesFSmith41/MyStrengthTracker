'use client'
import React from 'react'
import { useState } from 'react';
import type { User } from '@/app/lib/defintions';

export const FatTracker: React.FC<{user : User}> = (props)  => {
    const user = props.user;
    const [fat, setFat] = useState(user.fats)
    const [fatInput, setInput] = useState(0)
    const [backColor, setColor] = useState("bg-calorieBlue")
    async function Addfat() {
        await setFat(fat + fatInput)
        ChangeBackgroundColor(fat + fatInput)
        console.log(fat + fatInput)
    }
  
    function ChangeBackgroundColor(updatedfat : number) {
      if (updatedfat > 100) {
        setColor("bg-calorieRed")
      }
      else if (updatedfat < 50) {
        setColor("bg-calorieBlue")
      }
      else {
        setColor("bg-calorieGreen")
      }
    }
  
    return (
      <div className="flex flex-col bg-uiElement p-10 border-slate-950 rounded-md min-w-10 w-96 max-w-96 items-center">
          <p className="font-bold text-2xl">
              Fats
          </p>
          <div className="flex flex-col items-center w-36">
            <div className={`flex flex-col ${backColor} rounded-md w-full h-full min-h-20 justify-center mt-5`}>
              <p className="text-2xl font-bold text-center text-ultraWhite">
                {fat}
              </p>
            </div>
            <input
            className="rounded-md p-2 m-2 mt-5 w-full h-full min-h-10" 
            type="number"
            placeholder='Enter fat'
            id="fat"
            onChange={e => setInput(Number(e.target.value))}
            />
            <button 
            onClick={() => Addfat()}
            className="bg-uiButton text-xl font-bold hover:bg-uiButtonHover p-2 m-2 rounded-md w-full text-ultraWhite">
                Add fat
            </button>
          </div>
          
      </div>
    )
}
