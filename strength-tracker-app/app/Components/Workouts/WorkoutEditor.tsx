import React from 'react'
import { Workout } from '@/app/lib/defintions';
import { useContext } from 'react';

type StateFunction = {
    (workout: Workout) : void
}
export const WorkoutEditor: React.FC<{work : Workout, setWorkout: any}> = (props) => {
    
    const work = props.work
  return (
    <div className="z-40 bg-uiElement m-10">
        <form className="flex flex-col justify-center items-center"
        onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                name: { value: string };
                sets: { value: string };
                reps: {value : string};
                weight: {value : string};
            };
            const newWorkout = {
                name: target.name.value,
                sets: target.sets.value,
                reps: target.reps.value,
                weight: target.weight.value
            }
            console.log(newWorkout);

            props.setWorkout(newWorkout)
        }}>
            <div className="flex flex-row justify-between"> 
                <input 
                type="text"
                id="name"
                name="name"
                placeholder={work.name}
                required
                className="rounded-md mx-4 p-2"
                />
                <input 
                type="text"
                id="sets"
                name="sets"
                placeholder={work.sets}
                required
                className="rounded-md mx-4 p-2"
                />
                <input 
                type="text"
                id="reps"
                name="reps"
                placeholder={work.reps}
                required
                className="rounded-md mx-4 p-2"
                />
                <input 
                type="text"
                id="weight"
                name="weight"
                placeholder={work.weight}
                required
                className="rounded-md mx-4 p-2"
                />
            </div>
            <button className="rounded-md bg-uiButton hover:bg-uiButtonHover text-xl font-bold mt-4 mx-4 max-w-md min-w-sm p-2">
                Change Workout
            </button>
        </form>
    </div>
  )
}
