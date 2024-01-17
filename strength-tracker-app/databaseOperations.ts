'use server'
import { Workout } from "./app/lib/defintions"
import { sql } from '@vercel/postgres';

const { db } = require('@vercel/postgres');

export async function workoutUpdate(workouts : Workout[], userId : string) {
    try {
        //if (await sql`SELECT 1 FROM `)
    } catch (error) {
        console.log(error)
    }

}