import React from 'react'
import { CalorieCounter } from '../Components/CalorieCounter/CalorieCounter';
import type { User } from '@/app/lib/defintions';

const dashboard = () => {
  const user = {
    name: "testUser",
    email: "test@email.com",
    password: "123456",
    calorieCount: 20,
    weight: 150,
  }
  return (
    <div>
        <p className="text-slate-900 font-bold text-2xl">
            Dashboard
        </p>
        <CalorieCounter {...user}/>
    </div>
  )
}

export default dashboard;
