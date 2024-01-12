import React from 'react'
import { CalorieCounter } from '../Components/CalorieCounter/CalorieCounter';
import type { User } from '@/app/lib/defintions';
import { MacroCounter } from '../Components/MacroTracker/MacroCounter';

const dashboard = () => {
  const user = {
    name: "testUser",
    email: "test@email.com",
    password: "123456",
    calorieCount: 20,
    weight: 150,
    protien: 0,
    carbs: 0,
    fats: 0,
  }
  return (
    <div>
        <p className="text-slate-900 font-bold text-2xl">
            Dashboard
        </p>
        <CalorieCounter {...user}/>
        <MacroCounter {...user}/>
    </div>
  )
}

export default dashboard;
