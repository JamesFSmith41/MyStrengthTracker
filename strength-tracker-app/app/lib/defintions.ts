import { UUID } from "crypto"

export type User = {
    name: string,
    email: string,
    password: string,
    caloriecount: number,
    weight: number,
    protien: number,
    carbs: number,
    fats: number,
}

export type Workout = {
    workoutname: string,
    name: string, 
    sets: string,
    reps: string,
    weight: string,
}