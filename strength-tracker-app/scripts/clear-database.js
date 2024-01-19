const { db } = require('@vercel/postgres');
var bcrypt = require('bcryptjs');
const {workouts} = require('../app/lib/placeholder-data.js');

async function clearDatabase(client) {
    try {
        await client.sql`DROP TABLE workouts`;
        console.log("Workout table removed")
    } catch (error) {
        console.log("Error to remove db: " + error);
    }
}

async function main() {
    console.log("Connecting to db");
    const client = await db.connect();

    await clearDatabase(client);
    await client.end();
}

main().catch((error) => {
    console.error("Error connecting to database: " + error);
})