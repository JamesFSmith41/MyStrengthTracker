'use client'
import React from 'react'
import { WorkoutItem } from './WorkoutItem'
import { Workout } from '@/app/lib/defintions';
import { useState } from 'react';

export const WorkoutGrid = () => {
    const [workouts, setWorkouts] = useState<Array<Workout>>([ {name:"Bicep Curl", sets:"3", reps:"12", weight:"27.5lbs"}]);

    return (
    <div className="bg-uiElement w-full rounded-md p-2 m-2 flex flex-col justify-center items-center drop-shadow-md">
        <p className="text-2xl font-bold mb-10"> 
            Workouts
        </p>
        <div className='flex flex-row bg-ultraWhite justify-between w-full rounded-md p-3'>
            <p className="text-xl font-bold w-1/4 text-center"> Workout Name </p>
            <p className="text-xl font-bold w-1/4 text-center"> Sets </p>
            <p className="text-xl font-bold w-1/4 text-center"> Reps </p>
            <p className="text-xl font-bold w-1/4 text-center"> Weight </p>
        </div>
        <ul className="w-full mb-10">
        {workouts.map(items => 
                <li key={items.name}>
                    <WorkoutItem {...items} />
                </li>
            )}
        </ul>
        <form className="flex flex-col justify-center items-center"
        onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                name: { value: string };
                sets: { value: string };
                reps: {value : string};
                weight: {value : string};
            };
            setWorkouts([
                ...workouts,
                {
                    name: target.name.value, 
                    sets: target.sets.value, 
                    reps: target.reps.value, 
                    weight: target.weight.value
                }]);
        }}>
            <div className="flex flex-row justify-between"> 
                <input 
                type="text"
                id="name"
                name="name"
                placeholder="Workout Name"
                required
                className="rounded-md mx-4 p-2"
                />
                <input 
                type="text"
                id="sets"
                name="sets"
                placeholder="Sets"
                required
                className="rounded-md mx-4 p-2"
                />
                <input 
                type="text"
                id="reps"
                name="reps"
                placeholder="Reps"
                required
                className="rounded-md mx-4 p-2"
                />
                <input 
                type="text"
                id="weight"
                name="weight"
                placeholder="Weight"
                required
                className="rounded-md mx-4 p-2"
                />
            </div>
            <button className="rounded-md bg-uiButton hover:bg-uiButtonHover text-xl font-bold mt-4 mx-4 max-w-md min-w-sm p-2">
                Add Workout
            </button>
        </form>
    </div>
  )
}
