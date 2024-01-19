'use server'
import React, { Suspense } from 'react'
import { Workout } from '@/app/lib/defintions';
import { useState, useEffect } from 'react';
import { getWorkouts } from '../../lib/action'
import { LoadWorkoutGrid } from './LoadWorkout'

let fullfilled = false;
let promise : Promise<Workout[]>;
let data : Workout[];

export const fetchData = () => {

    if (!fullfilled) {
        if (!promise) { 
            promise = new Promise(async (resolve) => {
                const res = await getWorkouts("testUser");
                console.log(res.rows)
                fullfilled = true;
                data = res.rows;
                resolve(res.rows)
                console.log("Resolved")
            });
        }
        console.log("throw promise")
        throw promise
    }
}

const Main = () => {
    fetchData();
   
    console.log(data)
    return  <LoadWorkoutGrid data={data}/>
}
export async function WorkoutGrid() {

   
    console.log(await promise)
    return (
    <Suspense fallback={"Loading..."}> 
        <Main/>
    </Suspense>
  )
}
