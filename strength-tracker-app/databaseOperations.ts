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

export async function workoutFetch(userId : string) {
    try {
        console.log("Connecting to db");
        const client = await db.connect();
        return await client.sql`SELECT * FROM workouts WHERE Name = ${userId}`
    } catch (error) {
        console.log(error)
    }
}

export async function userFetch(userId : string) {
    try {
        console.log("Connecting to db");
        const client = await db.connect();
        return await client.sql`SELECT * from users WHERE name = ${userId}`
    } catch (error) {
        console.log(error)
    }
}