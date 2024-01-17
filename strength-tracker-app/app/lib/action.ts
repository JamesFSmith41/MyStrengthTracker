'use server'
import { Workout } from "./defintions"
import { workoutUpdate } from "@/databaseOperations";

export async function updateWorkouts(workouts : Workout[], userId : string) {
    try {
        console.log(workouts);
        await workoutUpdate(workouts, userId)
    } catch (error) {
        console.log(error)
    }
}