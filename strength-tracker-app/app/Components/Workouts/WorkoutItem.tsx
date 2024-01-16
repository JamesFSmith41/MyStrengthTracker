'use client'
import React from 'react'
import { Workout } from '@/app/lib/defintions'
import { useState } from 'react';
import { WorkoutEditor } from './WorkoutEditor';


export const WorkoutItem = (workout: Workout) => {

    const [edit, setEdit] = useState(true);
    const [workoutState, setWorkoutState] = useState<Workout>(workout);
    

    function handleClick () {
        setEdit(!edit);
        console.log("click");
    }

    function updateState(newState : Workout) {
        setWorkoutState(newState);
        console.log("Change State")
        console.log
    }

    return (
    <div>
        <div className='cursor-pointer drop-shadow-md flex flex-row bg-ultraWhite justify-between w-full rounded-md p-3 hover:bg-ultraWhiteHover'
        onClick={() => handleClick()}>
            <p className="text-xl font-bold w-1/4 text-center"> {workoutState.name} </p>
            <p className="text-xl font-bold w-1/4 text-center"> {workoutState.sets} </p>
            <p className="text-xl font-bold w-1/4 text-center"> {workoutState.reps} </p>
            <p className="text-xl font-bold w-1/4 text-center"> {workoutState.weight} </p>
        </div>
        <div hidden={edit}>
            <WorkoutEditor 
                setWorkout={updateState}
                work={workout}/>
        </div>
    </div>
   

  )
}
