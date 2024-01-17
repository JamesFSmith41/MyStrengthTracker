const { db } = require('@vercel/postgres');
var bcrypt = require('bcryptjs');
const {workouts} = require('../app/lib/placeholder-data.js');

async function seedWorkouts(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS  workouts (
            id UUID DEFAULT uuid_generate_v4 PRIMARY KEY,
            name STRING NOT NULL,
            workoutName STRING NOT NULL,
            sets STRING NOT NULL,
            reps STRING NOT NULL,
            weight STRING NOT NULL
        );`;

        console.log("Created workouts table");
        
        const insertedWorkouts = await Promise.all(
            workouts.map((workout) => client.sql`
            INSERT INTO workouts (id, name, workoutName, reps, sets, weights)
            VALUES (${workout.id}, ${workout.name}, ${workout.workoutName}, ${workout.sets}, ${workout.reps}, ${workout.weight})
            ON CONFLICT (id) DO NOTHING;
            `)
        );
        console.log(`Seeded ${insertedWorkouts.length} workouts`);
        return {createTable,
        workouts: insertedWorkouts
    };
    } catch (error) {
        console.log(error);
    }
}


async function main() {
    console.log("Connecting to db");
    const client = await db.connect();

    await seedWorkouts(client);
    await client.end();

    main().catch((error) => {
        console.error(error);
    })
}