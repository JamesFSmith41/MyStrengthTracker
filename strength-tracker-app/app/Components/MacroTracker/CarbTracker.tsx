'use client'
import React from 'react'
import { useState } from 'react';
import type { User } from '@/app/lib/defintions';

export const CarbTracker : React.FC<{user : User}> = (props)  => {
    const user = props.user;
    const [carbs, setcarbs] = useState(user.carbs)
    const [carbsInput, setInput] = useState(0)
    const [backColor, setColor] = useState("bg-calorieBlue")
    async function Addcarbs() {
        await setcarbs(carbs + carbsInput)
        ChangeBackgroundColor(carbs + carbsInput)
        console.log(carbs + carbsInput)
    }
  
    function ChangeBackgroundColor(updatedcarbs : number) {
      if (updatedcarbs > 405) {
        setColor("bg-calorieRed")
      }
      else if (updatedcarbs < 270) {
        setColor("bg-calorieBlue")
      }
      else {
        setColor("bg-calorieGreen")
      }
    }
  
    return (
      <div className="flex flex-col bg-uiElement p-10 border-slate-950 rounded-md min-w-10 w-96 max-w-96 items-center">
          <p className="font-bold text-2xl">
              Carbs
          </p>
          <div className="flex flex-col items-center w-36">
            <div className={`flex flex-col ${backColor} rounded-md w-full h-full min-h-20 justify-center mt-5`}>
              <p className="text-2xl font-bold text-center text-ultraWhite">
                {carbs}
              </p>
            </div>
            <input
            className="rounded-md p-2 m-2 mt-5 w-full h-full min-h-10" 
            type="number"
            placeholder='Enter carbs'
            id="carbs"
            onChange={e => setInput(Number(e.target.value))}
            />
            <button 
            onClick={() => Addcarbs()}
            className="bg-uiButton text-xl font-bold hover:bg-uiButtonHover p-2 m-2 rounded-md w-full text-ultraWhite">
                Add carbs
            </button>
          </div>
          
      </div>
    )
}
