const workouts = [
    { 
        workoutname: 'Bicep Curl',
        name: 'testUser',
        sets: '3',
        reps: '12',
        weight: '27.5lbs'
    },
    { 
        workoutname: 'Hammer Curl',
        name: 'testUser',
        sets: '3',
        reps: '10',
        weight: '27.5lbs'
    },
    { 
        workoutname: 'Hamstring Curl',
        name: 'testUser',
        sets: '3',
        reps: '14',
        weight: '85lbs'
    },
    { 
        workoutname: 'Tricep Pushdown',
        name: 'testUser',
        sets: '3',
        reps: '8',
        weight: '120lbs'
    }
]

const users = [
    {
        name: "testUser",
        email: "test@email.com",
        password: '724028e8183a07cc60a7cfd757e89959811e77229c5d0b26531cb99eed1c2eb4c1f9a7057fa0a4ab934c7524e0299903820dae2bc5f9ddcc00d15ef0b754ba3d',
        calorieCount: 1053,
        weight: 185,
        protien: 45,
        carbs: 100,
        fats: 20,
    }
]

module.exports = {
    workouts,
    users
}