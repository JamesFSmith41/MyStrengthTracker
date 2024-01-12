'use client'
import React from 'react'
import { useState } from 'react';
import type { User } from '@/app/lib/defintions';

export const CalorieCounter = (user : User) => {
  const [calories, setCalories] = useState(user.calorieCount)
  const [calorieInput, setInput] = useState(0)
  const [backColor, setColor] = useState("bg-calorieBlue")
  async function AddCalories() {
      await setCalories(calories + calorieInput)
      ChangeBackgroundColor(calories + calorieInput)
      console.log(calories + calorieInput)
  }

  function ChangeBackgroundColor(updatedCalories : number) {
    if (updatedCalories > 2000) {
      setColor("bg-calorieRed")
    }
    else if (updatedCalories < 1000) {
      setColor("bg-calorieBlue")
    }
    else {
      setColor("bg-calorieGreen")
    }
  }

  return (
    <div className="flex flex-col bg-uiElement p-10 border-slate-950 rounded-md min-w-10 w-96 max-w-96 m-10 items-center">
        <p className="font-bold text-2xl">
            Calories
        </p>
        <div className="flex flex-col items-center">
          <div className={`flex flex-col ${backColor} rounded-md w-full h-full min-h-20 justify-center mt-5`}>
            <p className="text-2xl font-bold text-center text-ultraWhite">
              {calories}
            </p>
          </div>
          <input
          className="rounded-md p-2 m-2 mt-5 w-full h-full min-h-10" 
          type="number"
          placeholder='Enter Calories'
          id="calories"
          onChange={e => setInput(Number(e.target.value))}
          />
          <button 
          onClick={() => AddCalories()}
          className="bg-uiButton text-xl font-bold hover:bg-uiButtonHover p-2 m-2 rounded-md w-full text-ultraWhite">
              Add Calories
          </button>
        </div>
        
    </div>
  )
}
