const { db } = require('@vercel/postgres');
var bcrypt = require('bcryptjs');
const {workouts, users} = require('../app/lib/placeholder-data.js');

async function seedWorkouts(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        console.log("Client Created")

        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS  workouts (
            workoutname TEXT NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            sets TEXT NOT NULL,
            reps TEXT NOT NULL,
            weight TEXT NOT NULL
        );`;

        console.log("Created workouts table");
        
        const insertedWorkouts = await Promise.all(
            workouts.map((workout) => client.sql`
            INSERT INTO workouts (workoutname, name, sets, reps, weight)
            VALUES (${workout.workoutname}, ${workout.name}, ${workout.sets}, ${workout.reps}, ${workout.weight})
            ON CONFLICT (workoutname) DO NOTHING;
            `)
        );
        console.log(`Seeded ${insertedWorkouts.length} workouts`);
        return {createTable,
        workouts: insertedWorkouts
    };
    } catch (error) {
        console.log("Error to seed db: " + error);
    }
}

async function seedWorkouts(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        console.log("Client Created")

        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS  users (
            name TEXT NOT NULL PRIMARY KEY,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            calorieCount INT NOT NULL,
            weight INT NOT NULL,
            protien INT NOT NULL,
            carbs INT NOT NULL,
            fats INT NOT NULL
        );`;

        console.log("Created user table");
        
        const insertedUser = await Promise.all(
            users.map((user) => client.sql`
            INSERT INTO users (name, email, password, calorieCount, weight, protien, carbs, fats)
            VALUES (${user.name}, ${user.email}, ${user.password}, ${user.calorieCount},
                 ${user.weight}, ${user.protien}, ${user.carbs}, ${user.fats})
            ON CONFLICT (name) DO NOTHING;
            `)
        );
        console.log(`Seeded ${insertedUser.length} user`);
        return {createTable,
        users: insertedUser
    };
    } catch (error) {
        console.log("Error to seed db: " + error);
    }
}

async function main() {
    console.log("Connecting to db");
    const client = await db.connect();

    await seedWorkouts(client);
    await seedUser(client);
    await client.end();
}

main().catch((error) => {
    console.error("Error connecting to database: " + error);
})