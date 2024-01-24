'use server'
import { Workout } from "./defintions"
import { workoutUpdate, workoutFetch, userFetch } from "@/databaseOperations";

export async function updateWorkouts(workouts : Workout[], userId : string) {
    try {
        console.log(workouts);
        await workoutUpdate(workouts, userId)
    } catch (error) {
        console.log(error)
    }
}

export async function getWorkouts(userId : string) {
    try {
        console.log(userId);
        return await workoutFetch(userId);
    } catch (error) {
        console.log(error);
    }
}

export async function getUser(userId : string) {
    try {
        console.log(userId);
        return await userFetch(userId);
    } catch (error) {
        console.log(error);
    }
}


export async function authenticate(
    prevState: string | undefined,
    formData : FormData
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error) {
            switch(error) {
                case 'CredentialsSignin':
                    return 'Invalid Credentials';

                default:
                    return 'Something went wrong';
            }
        }
        throw error;
    }
}